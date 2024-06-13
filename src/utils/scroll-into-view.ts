const scrollElementByIdIntoView = (id: string) => () => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", inline: "end" });
};

export default scrollElementByIdIntoView;
