import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

import * as $ from 'jquery';

@Component({
  selector: 'fiyps-forums-page',
  templateUrl: './forums-page.component.html',
  styleUrls: ['./forums-page.component.css']
})
export class ForumsPageComponent implements OnInit {
  @Input()  user_name: string = null;
  @Input()  user_image: string = null;

  commentForm;
   forums: any[] = null;
   archivedPosts: any[] = null;
   archive: any[] = null;
   showArchive: boolean = false;
   currentComment: number = -1;
   currentReadMoreBtn: number = -1;
   readMoreBtn: string = null;
   currentSize: number = 0;
   maxLength: number = 200;
   today =  Date.now();

  /* Archived posts variables */

  constructor( private api: ApiService ) {
    this.readMoreBtn = 'read more';
    $(".animated-forum-element").hide();
    this.forums = [
      {
        'id':1,
        'img':'user6.jpg',
        'group_name':'BSE18-2',
        'name':'Juls',
        'title':'Scheduling Final Year Project Lecture Time',
        'time':'5/10/17 11:45',
        'likes':20,
        'dislikes':31,
        'msg':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        'comments_count':6,
        'comments':[
          {
            'id':1,
            'img':'user2.jpg',
            'group_name':'BSE18-12',
            'name':'Tom',
            'time':'5/10/17 11:50',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':2,
            'img':'user.jpg',
            'group_name':'BSE18-11',
            'name':'Ruth',
            'time':'5/10/17 11:54',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':3,
            'img':'user2.jpg',
            'group_name':'BSE18-12',
            'name':'David',
            'time':'5/10/17 11:59',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':4,
            'img':'user3.jpg',
            'group_name':'BSE18-11',
            'name':'Mark',
            'time':'5/10/17 12:00'
          },
          {
            'id':5,
            'img':'user4.jpg',
            'group_name':'BSE18-12',
            'name':'Ceaser',
            'time':'5/10/17 12:10',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':6,
            'img':'user5.jpg',
            'group_name':'BSE18-11',
            'name':'Jason',
            'time':'5/10/17 12:14',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
        ]
      },
      {
        'id':2,
        'img':'user.jpg',
        'group_name':'BSE18-2',
        'name':'David',
        'title':'Where To Find The Best Online Tutorials',
        'time':'5/10/17 11:45',
        'likes':0,
        'dislikes':101,
        'msg':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        'comments_count':6,
        'comments':[
          {
            'id':1,
            'img':'user2.jpg',
            'group_name':'BSE18-12',
            'name':'Tom',
            'time':'5/10/17 11:50',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':2,
            'img':'user.jpg',
            'group_name':'BSE18-11',
            'name':'Ruth',
            'time':'5/10/17 11:54',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
        ]
      },
      {
        'id':3,
        'img':'user5.jpg',
        'group_name':'BSE18-2',
        'name':'Ruth',
        'title':'Ipsum Is Simply Dummy Text Of The Printing An',
        'time':'5/10/17 11:45',
        'likes':200,
        'dislikes':1,
        'msg':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        'comments_count':6,
        'comments':[
          {
            'id':1,
            'img':'user2.jpg',
            'group_name':'BSE18-12',
            'name':'Tom',
            'time':'5/10/17 11:50',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':2,
            'img':'user.jpg',
            'group_name':'BSE18-11',
            'name':'Ruth',
            'time':'5/10/17 11:54',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':3,
            'img':'user2.jpg',
            'group_name':'BSE18-12',
            'name':'David',
            'time':'5/10/17 11:59',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':4,
            'img':'user3.jpg',
            'group_name':'BSE18-11',
            'name':'Mark',
            'time':'5/10/17 12:00'
          },
          {
            'id':5,
            'img':'user4.jpg',
            'group_name':'BSE18-12',
            'name':'Ceaser',
            'time':'5/10/17 12:10',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':6,
            'img':'user5.jpg',
            'group_name':'BSE18-11',
            'name':'Jason',
            'time':'5/10/17 12:14',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
        ]
      },
      {
        'id':4,
        'img':'user4.jpg',
        'group_name':'BSE18-2',
        'name':'Juls',
        'title':"Lorem Ipsum has been the industry's",
        'time':'5/10/17 11:45',
        'likes':20,
        'dislikes':31,
        'msg':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        'comments_count':6,
        'comments':[
          {
            'id':1,
            'img':'user2.jpg',
            'group_name':'BSE18-12',
            'name':'Tom',
            'time':'5/10/17 11:50',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':2,
            'img':'user.jpg',
            'group_name':'BSE18-11',
            'name':'Ruth',
            'time':'5/10/17 11:54',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':3,
            'img':'user2.jpg',
            'group_name':'BSE18-12',
            'name':'David',
            'time':'5/10/17 11:59',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':4,
            'img':'user3.jpg',
            'group_name':'BSE18-11',
            'name':'Mark',
            'time':'5/10/17 12:00'
          },
          {
            'id':5,
            'img':'user4.jpg',
            'group_name':'BSE18-12',
            'name':'Ceaser',
            'time':'5/10/17 12:10',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':6,
            'img':'user5.jpg',
            'group_name':'BSE18-11',
            'name':'Jason',
            'time':'5/10/17 12:14',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
        ]
      },
      {
        'id':5,
        'img':'user2.jpg',
        'group_name':'BSE18-2',
        'name':'Juls',
        'title':'Lorem Ipsum is simply dummy text',
        'time':'5/10/17 11:45',
        'likes':2,
        'dislikes':'',
        'msg':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        'comments_count':6,
        'comments':[
          {
            'id':1,
            'img':'user2.jpg',
            'group_name':'BSE18-12',
            'name':'Tom',
            'time':'5/10/17 11:50',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':2,
            'img':'user.jpg',
            'group_name':'BSE18-11',
            'name':'Ruth',
            'time':'5/10/17 11:54',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':3,
            'img':'user2.jpg',
            'group_name':'BSE18-12',
            'name':'David',
            'time':'5/10/17 11:59',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':4,
            'img':'user3.jpg',
            'group_name':'BSE18-11',
            'name':'Mark',
            'time':'5/10/17 12:00'
          },
          {
            'id':5,
            'img':'user4.jpg',
            'group_name':'BSE18-12',
            'name':'Ceaser',
            'time':'5/10/17 12:10',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
          {
            'id':6,
            'img':'user5.jpg',
            'group_name':'BSE18-11',
            'name':'Jason',
            'time':'5/10/17 12:14',
            'msg':"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
          },
        ]
      },
    ]
    this.archivedPosts = this.forums;
  }

  ngOnInit() {
    $(document).ready(function(){
      setTimeout(() =>{
        $(".animated-forum-element").show();
      },2000);
    });

    this.commentForm = new FormGroup({
      comment: new FormControl("",Validators.compose([
        Validators.required,
        Validators.maxLength(this.maxLength)
      ]))
    });

  }
  /* Read archived posts */
  _readArchivedPost(id){
    $(".animated-forum-element").hide();
    let Id = parseInt(id) + 1;
    this.showArchive = true;
    this.archivedPosts.filter((item) =>{
      if( item.id == Id ){
        this.archive = item
        setTimeout(() =>{
          $(".animated-forum-element").show();
        },10);        
        this.api._updateBreadcrumb(2,item.title,'');
      }
    });
  }
  /* Read all the content for a particular post */
  _readMore(id){
    /* Reset them all to the default */
    $(".forum-content").removeClass("readMore");
    $(".forum-read-more-btn").html("read more");
    if( this.currentReadMoreBtn == id){
      this.currentReadMoreBtn = -1;
    }else{
      $("."+id+"").addClass("readMore");
      $(".forum-read-more-btn."+id+"").html("show less");
      this.currentReadMoreBtn = id;
    }
  }
  /* Display the comments for a particular post */
  _readComments(id){
    this.currentSize = 0;
    //$(".comment").attr('val',"");
    this.commentForm.setValue({comment:""});
    $(".forum-response-content-wrapper").slideUp(300);
    $(".forum-new-comment-wrapper").hide(200);
    if( this.currentComment == id){
      this.currentComment = -1;
    }else{
      $("."+id+"").show(300);
      $(".forum-new-comment-wrapper."+id+"").show(300); //activate the option for generating a comment.
      this.currentComment = id;
    }
  }
  /* Register a like on a post */
  _like(id){
    console.log("I like this post");
    let ID = parseInt(id) + 1;
    this.forums.filter((item) =>{
      if(item.id == ID){
        item.likes = parseInt(item.likes) + 1;
      }
    });
  }
  /* Register a Dislike on a post */
  _dislike(id){
    console.log("I dislikes this post");
    let ID = parseInt(id) + 1;
    this.forums.filter((item) =>{
      if(item.id == ID){
        item.dislikes = parseInt(item.dislikes) + 1;
      }
    });
  }
  /* Track the number of characters the user has typed */
  _commentSize(comment){
    this.currentSize = comment.length;
  }
  /* Submit the user's comment */
  _submitComment(data,id){
    let Id = parseInt(id) + 1;
    this.forums.filter((item) =>{
      if(item.id == Id){
        let size = item.comments.length;
        item.comments.push({
          'id': size + 1,
          'img':this.user_image,
          'group_name':'BSE18-12',
          'name':this.user_name,
          'time':this.today,
          'msg':data['comment']
        });
        item.comments_count = item.comments_count + 1;
        this.commentForm.setValue({comment:""});  //Clear the pallete.
      }
    });
  }
}
