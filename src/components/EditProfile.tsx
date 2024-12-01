import React, { useState } from 'react';
import EditIcon from '../assets/icons/edit.svg';
import './EditProfile.scss';

const EditProfile: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const validateForm = () => {
    const errors: { email?: string; password?: string } = {};

    // Email validation (simple check)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      alert('Profile updated successfully');
    }
  };

  return (
    <div className="edit-profile">
      <div className="container flex pt-4" aria-label="Edit profile form">
        <div className="avatar">
          <div className="relative">
            <img
              className="rounded-full"
              src="https://i.pravatar.cc/100?img=7"
              alt="Avatar"
              aria-label="Profile picture"
            />
            <button
              type="button"
              className="rounded-full"
              aria-label="Edit profile picture"
            >
              <img src={EditIcon} alt="Edit icon" />
              <span className="sr-only">Edit profile picture</span>
            </button>
          </div>
        </div>
        <form
          className="form-group-container flex-1"
          onSubmit={handleSubmit}
          aria-label="Edit profile form"
        >
          <div className="form-group">
            <label className="pb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              className="rounded-2xl py-3 px-5"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label className="pb-2" htmlFor="username">
              User Name
            </label>
            <input
              type="text"
              className="rounded-2xl py-3 px-5"
              placeholder="Enter your user name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label className="pb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="rounded-2xl py-3 px-5"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              aria-invalid={errors.email ? true : false}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p className="error" id="email-error">
                {errors.email}
              </p>
            )}
          </div>
          <div className="form-group">
            <label className="pb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="rounded-2xl py-3 px-5"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              aria-invalid={errors.password ? true : false}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />
            {errors.password && (
              <p className="error" id="password-error">
                {errors.password}
              </p>
            )}
          </div>
          <div className="form-group">
            <label className="pb-2" htmlFor="date-of-birth">
              Date of Birth
            </label>
            <input
              type="date"
              className="rounded-2xl py-3 px-5"
              placeholder="Enter your username"
              required
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              id="date-of-birth"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label className="pb-2" htmlFor="present-address">
              Present Address
            </label>
            <input
              type="text"
              className="rounded-2xl py-3 px-5"
              placeholder="Enter your address"
              required
              value={presentAddress}
              onChange={(e) => setPresentAddress(e.target.value)}
              id="present-address"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label className="pb-2" htmlFor="permanent-address">
              Permanent Address
            </label>
            <input
              type="text"
              className="rounded-2xl py-3 px-5"
              placeholder="Enter your permanent address"
              required
              value={permanentAddress}
              onChange={(e) => setPermanentAddress(e.target.value)}
              id="permanent-address"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label className="pb-2" htmlFor="city">
              City
            </label>
            <input
              type="text"
              className="rounded-2xl py-3 px-5"
              placeholder="Enter your city"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              id="city"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label className="pb-2" htmlFor="postal-code">
              Postal Code
            </label>
            <input
              type="text"
              className="rounded-2xl py-3 px-5"
              placeholder="Enter your postal code"
              required
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              id="postal-code"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label className="pb-2" htmlFor="country">
              Country
            </label>
            <input
              type="text"
              className="rounded-2xl py-3 px-5"
              placeholder="Enter your country"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              id="country"
              aria-required="true"
            />
          </div>
          <div></div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="save-button text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-lg py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              aria-label="Save changes"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
