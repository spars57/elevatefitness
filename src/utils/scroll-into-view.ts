const scrollElementByIdIntoView = (id: string) => () => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};

export default scrollElementByIdIntoView;
