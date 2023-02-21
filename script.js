function scrollToPost(postId) {
    const offset = document.querySelector('.header').offset;
    const post = document.querySelector(postId);
    const position = post.offsetTop - offset;
  
    window.scroll({
      top: position,
      behavior: 'smooth'
    });
  }
  