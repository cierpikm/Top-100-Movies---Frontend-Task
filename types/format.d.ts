export declare type MovieType = {
  category: {
    attributes: {
      ["im:id"]: string;
      label: string;
      scheme: string;
      term: string;
    };
  };
  id: { label: string; attributes: { ["im:id"]: string } };
  ["im:artist"]: { label: string };
  ["im:contentType"]: { attributes: { label: string; term: string } };
  ["im:image"]: Array<{
    attributes: {
      height: string;
    };
    label: string;
  }>;
  ["im:name"]: { label: string };
  ["im:price"]: { label: string; attributes: { amount: string; currency: string } };
  ["im:releaseDate"]: { label: string; attributes: { label: string } };
  ["im:rentalPrice"]: { label: string; attributes: { amount: string; currency: string } };
  link: Array<{
    attributes: {
      href: string;
      ["im:assetType"]: string;
      rel: string;
      title: string;
      type: string;
    };
    ["im:duration"]: { label: "155232.0" };
  }>;
  rights: { label: string };
  summary: { label: string };
  title: { label: string };
};
