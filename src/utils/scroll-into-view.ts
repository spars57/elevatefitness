const scrollElementByIdIntoView = (id: string) => () => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", inline: "center" });
};

export default scrollElementByIdIntoView;
