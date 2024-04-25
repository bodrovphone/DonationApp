export type StoreData = {
  user: {
    firstName: string;
    lastName: string;
    userId: number;
    profilePictureUri: string;
  };
  categories: {
    categories: {
      id: number;
      name: string;
    }[];
    selectedCategoryId: number | undefined;
  };
};
