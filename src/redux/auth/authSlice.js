import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { registrationUser, loginUser, logOutUser, refreshUser, verifyUser, updateProfileSettings } from './authOperation';
import { handleFulfilledRegistration, handleFulfilledLogin, handleFulfilledLogOut, handleFulfilledRefresh, handlePending, handleRejected, handleFulfilledVerify, handleVerifyRejected, handleFulfilledUpdateProfileSettings, handlePendingUpdateProfileSettings, handleRejectedUpdateProfileSettings, handlePendingRefresh } from './authReducer';
import { operationsType } from './authOperationsType';

const contactsInitialState = {
    user: {
        email: '',
        name: '',
        registrDate: '',
        profileSettings: {
            height: '',
            currentWeight: '',
            desiredWeight: '',
            birthday: null,
            blood: null,
            levelActivity: null,
            sex: null,
            bmr: 0,
        }
    },
    status: null,
    token: '',
    isVerify: false,
    isLoading: false,
    isRefreshing: false,
    error: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: contactsInitialState,
    extraReducers: (builder) => {
        builder
          .addCase(registrationUser.fulfilled, handleFulfilledRegistration)
          .addCase(verifyUser.fulfilled, handleFulfilledVerify)
          .addCase(loginUser.fulfilled, handleFulfilledLogin)
          .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
          .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
          .addCase(
            updateProfileSettings.pending,
            handlePendingUpdateProfileSettings
          )
          .addCase(refreshUser.pending, handlePendingRefresh)
          .addCase(
            updateProfileSettings.fulfilled,
            handleFulfilledUpdateProfileSettings
          )
          .addCase(
            updateProfileSettings.rejected,
            handleRejectedUpdateProfileSettings
          )
          .addCase(verifyUser.rejected, handleVerifyRejected)
          .addMatcher(isAnyOf(...operationsType("pending")), handlePending)
          .addMatcher(isAnyOf(...operationsType("rejected")), handleRejected);
        

    },
});

export const authReducer = authSlice.reducer