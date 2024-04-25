export type Category = {
  id: number;
  name: string;
};

export type StoreData = {
  user: {
    firstName: string;
    lastName: string;
    userId: number;
    profilePictureUri: string;
  };
  categories: {
    categories: Category[];
    selectedCategoryId: number | undefined;
  };
};
