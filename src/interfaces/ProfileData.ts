export interface ProfileData {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profilePicture: File | null;
}
