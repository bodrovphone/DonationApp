import auth from '@react-native-firebase/auth';

export const createUser = async (
  fullName: string,
  email: string,
  password: string,
) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user?.updateProfile({
      displayName: fullName,
    });
    console.log('User account created & signed in!', user);
    return user;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'that email already is in use!'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'Please enter a valid email address!'};
    }
    return {error: 'something went wrong!'};
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const userToken = await response.user?.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user?.displayName,
        email: response.user?.email,
        token: userToken,
      },
    };
  } catch (error: any) {
    console.log('the error it is', error);
    if ((error.code = '[auth/invalid-credential]')) {
      return {
        status: false,
        error: 'Email or password is not valid!',
      };
    }
    return {
      status: false,
      error: error.message,
    };
  }
};
