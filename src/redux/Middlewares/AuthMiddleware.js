import React, {Component} from 'react';
import Toast from 'react-native-toast-message';
import {ApiCaller, NavigationService} from '../../config';
import {ToastError, ToastSuccess} from '../../config/Constants';
import {AuthAction, LoaderAction} from '../Actions';

export class AuthMiddleware extends Component {
  static Login({email, password}) {
    return async dispatch => {
      console.warn('Email and passord', email, password);
      try {
        dispatch(LoaderAction.LoaderTrue());
        // let response = await ApiCaller.Post('Account/Login', {
        //   clientEmail: email,
        //   password: password,
        //   source_id: 1,
        // });
        let response = {
          data: {
            status: 200,
            data: {status: 'Success', data: {clientName: 'Allen'}},
          },
        };
        setTimeout(() => {
          dispatch(LoaderAction.LoaderFalse());
          // console.warn('========', response);
          if (response.data.status == 200)
            if (response.data.data.status == 'Success') {
              dispatch(AuthAction.Login(response.data.data.data));
              NavigationService.resetStack('Projects');
            } else {
              Toast.show(ToastError(response.data.data.message));
            }
        }, 2000);
      } catch (e) {
        console.warn('====error', e.message);
        dispatch(LoaderAction.LoaderFalse());
      }
    };
  }

//   static ChangePassword({token, oldPassword, newPassword, repeatPassword}) {
//     return async dispatch => {
//       try {
//         dispatch(LoaderAction.LoaderTrue());
//         let response = await ApiCaller.Post(
//           'Account/ChangePassword',
//           {
//             oldPassword,
//             newPassword,
//             repeatPassword,
//           },
//           {
//             Authorization: 'Bearer ' + token,
//           },
//         );
//         dispatch(LoaderAction.LoaderFalse());
//         console.warn('Change password api', response);
//         if (response.data.status == 200)
//           if (response.data.data.status == 'Success') {
//             Toast.show(ToastSuccess('Password Changed Successfully'));
//           } else {
//             Toast.show(ToastError(response.data.data.message));
//           }
//       } catch (e) {
//         dispatch(LoaderAction.LoaderFalse());
//         console.warn(e);
//       }
//     };
//   }
}

export default AuthMiddleware;
