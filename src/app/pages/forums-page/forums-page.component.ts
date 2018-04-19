import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Ng2PopupComponent, Ng2MessagePopupComponent } from 'ng2-popup';
import * as $ from 'jquery';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'fiyps-forums-page',
  templateUrl: './forums-page.component.html',
  styleUrls: ['./forums-page.component.css']
})
export class ForumsPageComponent implements OnInit {
  @Input()  user_name: string = null;
  @Input()  user_image: string = null;
  @Input()  refreshPosts: number = 0;

  commentForm;
   forums: any[] = null;
   archivedPosts: any[] = null;
   archive: any[] = null;
   archivedComments: any[] = []
   showArchive: boolean = false;
   currentComment: number = -1;
   currentReadMoreBtn: number = -1;
   readMoreBtn: string = null;
   currentSize: number = 0;
   maxLength: number = 200;
   today =  Date.now();
   comments: any[] = [];
   commentsCount:any[] = []
   likesCount:any[] = []
   dislikesCount:any[] = []

   @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;

  /* Archived posts variables */

  constructor( private api: ApiService ) {
    this.readMoreBtn = 'read more';
    this._fetchPost();
  }

  ngOnInit() {

    this.commentForm = new FormGroup({
      comment: new FormControl("",Validators.compose([
        Validators.required,
        Validators.maxLength(this.maxLength)
      ]))
    });

    this._fetchArchivedPosts();

  }

  /* Read archived posts */
  _readArchivedPost(id){
    console.log("")
    $(".animated-forum-element").hide();
    let Id = parseInt(id) + 1;
    
    $.ajax({
      type: "GET",
      url: this.api.getArchivedPostsDetails(id),
      error: ((err) =>{
        this.api.getRequestError();
      }),
      success: ((data) =>{
        console.log("Here is the data sent from the api stream::",data)
        if(data['data']){
          this.archive = data['data'];
          this.archive.filter((post) =>{
            post.message = atob(post['message'])
          })
          this.archive = this.archive[0];
          this.showArchive = true;
          if(data['comments'] && data['comments'][0] != 'none' ){
            console.log("Comments are here::",data['comments'])
            this.archivedComments = data['comments'];
          }else{
            this.commentsCount = []
            console.log("There are no comments");
          }
        }else{
          this.api.getRequestError();
        }
      })
    })

  }

  /* Read all the content for a particular post */
  _readMore(id){
    /* Reset them all to the default */
    $(".forum-content").removeClass("readMore");
    $(".forum-read-more-btn").html("read more");
    if( this.currentReadMoreBtn == id){
      this.currentReadMoreBtn = -1;
    }else{
      console.log("Here is the id supplied::",id)
      $("._"+id+"").addClass("readMore");
      $(".forum-read-more-btn."+id+"").html("show less");
      this.currentReadMoreBtn = id;
    }
  }

  /* Fetch comments */
  _fetchComment(id){
    this.comments = [];
    $.ajax({
      type: "GET",
      url: this.api.getFetchCommentsEndpoint(id),
      error: ((err) =>{
        this.openPopup(this.api.getRequestError());
      }),
      success:((data) =>{
        console.log(data)
        if(data['data']){
          this.comments = data['data'];
        }else{
          this.openPopup("No comments yet.But you can be the first");
          this.comments = []
        }
      })
    });    
  }

  /* Display the comments for a particular post */
  _readComments(id){

    this._fetchComment(id);

    this.currentSize = 0;
    //$(".comment").attr('val',"");
    this.commentForm.setValue({comment:""});
    $(".forum-response-content-wrapper").slideUp(300);
    $(".forum-new-comment-wrapper").hide(200);
    if( this.currentComment == id){
      this.currentComment = -1;
    }else{
      $("."+id+"").show(0);
      $(".forum-new-comment-wrapper."+id+"").show(0); //activate the option for generating a comment.
      this.currentComment = id;
    }
  }

  /* Register a like on a post */
  _like(index,likes,forumPostId){
    $.ajax({
      type: "GET",
      url: this.api.getForumLikesCount(forumPostId,likes),
      error: ((err) =>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data) =>{
        if (data['data']){
          this.likesCount[index] = data['data']
        }else{
          this.openPopup(data['error']);
        }
      })
    });
  }

  /* Register a Dislike on a post */
  _dislike(index,dislikes,forumPostId){
    console.log("I dislikes this post");
    $.ajax({
      type: "GET",
      url: this.api.getForumDislikesCount(forumPostId,dislikes),
      error: ((err) =>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data) =>{
        if (data['data']){
          this.dislikesCount[index] = data['data']
        }else{
          this.openPopup(data['error']);
        }
      })
    });
  }

  /* Track the number of characters the user has typed */
  _commentSize(comment){
    this.currentSize = comment.length;
  }

  /* Submit the user's comment */
  _submitComment(formData,id,commentsCount,index){
    $.ajax({
      type: "POST",
      data: formData,
      url: this.api.getPostCommentsEndpoint(id,commentsCount),
      error: ((err) =>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data) =>{
        if (data['data'] === 'success'){
          this.openPopup("You've successfully comment on this post");
          this._fetchComment(id);
          this._updateCommentsCount(index,id)
          this.commentForm.patchValue({
            comment: ''
          })
        }else{
          this.openPopup(data['error']);
        }
      })
    });
  }

  /* Update the comments for this post */
  _updateCommentsCount(index,forumPostId){
    $.ajax({
      type: "GET",
      url: this.api.getForumCommentsCount(forumPostId),
      error: ((err) =>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data) =>{
        if (data['data']){
          if(data['data'] != 'empty'){
            this.commentsCount[index] = data['data'][0]['commentsCount']
          }else{
            this.openPopup(data['error']);
          }
        }else{
          this.openPopup(data['error']);
        }
      })
    });
  }  

  /* Fetch the most recent posts */
  _fetchPost(){
    $.ajax({
      type: "GET",
      url: this.api.getForumPostsEndpoint(),
      error: ((err) =>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data) =>{
        if(data['data'] && data['textFiles']){
          this.forums = data['data']
          var textFiles = data['textFiles'].reverse();
          this.forums.reverse();
          this._empty();
          var count = 0;
          this.forums.filter((post) =>{    
            this.commentsCount.push(post.commentsCount)     
            this.likesCount.push(post.likes)     
            this.dislikesCount.push(post.dislikes)     
            post.message = atob(textFiles[count]['fileText'])
            count++;
          });
        }else{
          this.forums = []
          this.openPopup(data['error'])
        }
      })
    })
  }

  /* Fetch archived posts */
  _fetchArchivedPosts(){
    $.ajax({
      type: "GET",
      url: this.api.getArchivedPosts(),
      error: ((err) =>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data) =>{
        if(data['data'] != 'empty'){
          this.archivedPosts = data['data'].reverse();
        }else{
          this.archivedPosts = []
        }
      })
    })
  }

  /* Empty the count variables */
  _empty(){
    this.commentsCount  = []
    this.likesCount     = []
    this.dislikesCount  = []
  }

  /* Pop over */
  openPopup(msg) {
    this.popup.open(Ng2MessagePopupComponent, {
      message: msg,
    })
  } 

  /* Handle variables that change */
  ngOnChanges(){
    if(this.refreshPosts != 0){
      this._fetchPost();
    }
  }

}
