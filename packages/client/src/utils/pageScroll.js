const pageScroll = (e) => {
  e.preventDefault();
  document.getElementById(e.currentTarget.href.split('#')[1]).scrollIntoView({
    behavior: 'smooth',
  });
};

export default pageScroll;
