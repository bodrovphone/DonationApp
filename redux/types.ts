export type Category = {
  id: number;
  name: string;
};

export type Donation = {
  name: string;
  description: string;
  image: string;
  donationItemId: number;
  categoryIds: number[];
  price: string;
};

export type StoreData = {
  user: {
    displayName: string;
    email: string;
    userId: number;
    profilePictureUri: string;
    isLoggedIn: boolean;
  };
  categories: {
    categories: Category[];
    selectedCategoryId: number | undefined;
  };
  donations: {
    items: Donation[];
    selectedDonationId: number | undefined;
    selectedDonationInfo: Donation;
  };
};

export type User = {
  displayName?: string;
  email?: string;
  profilePictureUri?: string;
  isLoggedIn?: boolean;
  token?: string;
};
