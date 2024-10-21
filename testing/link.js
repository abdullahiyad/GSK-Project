let Pagelink = {
  title: "Test Title",
  link: "",
};

const SetPageLink = (Title, link) => {
  Pagelink.title = Title;
  Pagelink.link = link;
};

const getPageLink = () => {
  console.log("page link = ", Pagelink.link);
  return Pagelink.link;
};

// Correctly export both functions
export { SetPageLink, getPageLink };
