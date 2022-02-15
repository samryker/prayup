export let ToastError = message => {
  return {
    type: 'error',
    position: 'bottom',
    text1: message,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
    onShow: () => {},
    onHide: () => {},
  };
};
export let ToastSuccess = message => {
  return {
    type: 'success',
    position: 'bottom',
    text1: message,
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 30,
    onShow: () => {},
    onHide: () => {},
  };
};

export let TimeZone = [
  {
    label: '(GMT -12:00) Eniwetok, Kwajalein',
    value: '(GMT -12:00) Eniwetok, Kwajalein',
    gmt: '(GMT-1200)',
  },
  {
    label: '(GMT -11:00) Midway Island, Samoa',
    value: '(GMT -11:00) Midway Island, Samoa',
    gmt: '(GMT-1100)',
  },
  {label: '(GMT-10:00) Hawaii', value: '(GMT-10:00) Hawaii', gmt: '(GMT-1000)'},
  {
    label: '(GMT -9:30) Taiohae',
    value: '(GMT -9:30) Taiohae',
    gmt: '(GMT-0930)',
  },
  {label: '(GMT -9:00) Alaska', value: '(GMT -9:00) Alaska', gmt: '(GMT-0900)'},
  {
    label: '(GMT -8:00) Pacific Time (US & Canada)',
    value: '(GMT -8:00) Pacific Time (US & Canada)',
    gmt: '(GMT-0800)',
  },
  {
    label: '(GMT -7:00) Mountain Time (US & Canada)',
    value: '(GMT -7:00) Mountain Time (US & Canada)',
    gmt: '(GMT-0700)',
  },
  {
    label: '(GMT -6:00) Central Time (US & Canada), Mexico City',
    value: '(GMT -6:00) Central Time (US & Canada), Mexico City',
    gmt: '(GMT-0600)',
  },
  {
    label: '(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima',
    value: '(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima',
    gmt: '(GMT-0500)',
  },
  {
    label: '(GMT -4:30) Caracas',
    value: '(GMT -4:30) Caracas',
    gmt: '(GMT-0430)',
  },
  {
    label: '(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz',
    value: '(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz',
    gmt: '(GMT-0400)',
  },
  {
    label: '(GMT -3:30) Newfoundland',
    value: '(GMT -3:30) Newfoundland',
    gmt: '(GMT-0300)',
  },
  {
    label: '(GMT -3:00) Brazil, Buenos Aires, Georgetown',
    value: '(GMT -3:00) Brazil, Buenos Aires, Georgetown',
    gmt: '(GMT-0300)',
  },
  {
    label: '(GMT -2:00) Mid-Atlantic',
    value: '(GMT -2:00) Mid-Atlantic',
    gmt: '(GMT-0200)',
  },
  {
    label: '(GMT -1:00) Azores, Cape Verde Islands',
    value: '(GMT -1:00) Azores, Cape Verde Islands',
    gmt: '(GMT-0100)',
  },
  {
    label: '(GMT) Western Europe Time, London, Lisbon, Casablanca',
    value: '(GMT) Western Europe Time, London, Lisbon, Casablanca',
    gmt: '(GMT+0000)',
  },
  {
    label: '(GMT +1:00) Brussels, Copenhagen, Madrid, Paris',
    value: '(GMT +1:00) Brussels, Copenhagen, Madrid, Paris',
    gmt: '(GMT+0100)',
  },
  {
    label: '(GMT +2:00) Kaliningrad, South Africa',
    value: '(GMT +2:00) Kaliningrad, South Africa',
    gmt: '(GMT+0200)',
  },
  {
    label: '(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg',
    value: '(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg',
    gmt: '(GMT+0300)',
  },
  {label: '(GMT +3:30) Tehran', value: '(GMT +3:30) Tehran', gmt: '(GMT+0330)',},
  {
    label: '(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi',
    value: '(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi',
    gmt: '(GMT+0400)',
  },
  {label: '(GMT +4:30) Kabul', value: '(GMT +4:30) Kabul', gmt: '(GMT+0430)',},
  {
    label: '(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent',
    value: '(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent',
    gmt: '(GMT+0500)',
  },
  {
    label: '(GMT +5:30) Bombay, Calcutta, Madras, New Delhi',
    value: '(GMT +5:30) Bombay, Calcutta, Madras, New Delhi',
    gmt: '(GMT+0530)',
  },
  {
    label: '(GMT +5:45) Kathmandu, Pokhara',
    value: '(GMT +5:45) Kathmandu, Pokhara',
    gmt: '(GMT+1200)',
  },
  {
    label: '(GMT +6:00) Almaty, Dhaka, Colombo',
    value: '(GMT +6:00) Almaty, Dhaka, Colombo',
    gmt: '(GMT+1200)',
  },
  {
    label: '(GMT +6:30) Yangon, Mandalay',
    value: '(GMT +6:30) Yangon, Mandalay',
    gmt: '(GMT+1200)',
  },
  {
    label: '(GMT +7:00) Bangkok, Hanoi, Jakarta',
    value: '(GMT +7:00) Bangkok, Hanoi, Jakarta',
    gmt: '(GMT+1200)',
  },
  {
    label: '(GMT +8:00) Beijing, Perth, Singapore, Hong Kong',
    value: '(GMT +8:00) Beijing, Perth, Singapore, Hong Kong',
    gmt: '(GMT+1200)',
  },
  {label: '(GMT +8:45) Eucla', value: '(GMT +8:45) Eucla', gmt: '(GMT+1200)',},
  {
    label: '(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
    value: '(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
    gmt: '(GMT+1200)',
  },
  {
    label: '(GMT +9:30) Adelaide, Darwin',
    value: '(GMT +9:30) Adelaide, Darwin',
    gmt: '(GMT+1200)',
  },
  {
    label: '(GMT +10:00) Eastern Australia, Guam, Vladivostok',
    value: '(GMT +10:00) Eastern Australia, Guam, Vladivostok',
    gmt: '(GMT+1200)',
  },
  {
    label: '(GMT +10:30) Lord Howe Island',
    value: '(GMT +10:30) Lord Howe Island',
    gmt: '(GMT+1200)',
  },
  {
    label: '(GMT +11:00) Magadan, Solomon Islands, New Caledonia',
    value: '(GMT +11:00) Magadan, Solomon Islands, New Caledonia',
    gmt: '(GMT+1200)',
  },
  {
    label: '(GMT +11:30) Norfolk Island',
    value: '(GMT +11:30) Norfolk Island',
    gmt: '(GMT+1200)',
  },
  {
    label: '(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka',
    value: '(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka',
    gmt: '(GMT+1200)',
  },
  {
    label: '(GMT +12:45) Chatham Islands',
    value: '(GMT +12:45) Chatham Islands',
    gmt: '(GMT+1200)',
  },
  {
    label: '(GMT +13:00) Apia, Nukualofa',
    value: '(GMT +13:00)',
    gmt: '(GMT+1200)',
  },
  {
    label: '(GMT +14:00) Line Islands, Tokelau',
    value: '(GMT +14:00) Line Islands, Tokelau',
    gmt: '(GMT+1200)',
  },
];

export const emailValidityCheck = email => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export const isPasswordAlphaNumeric = password => {
  if (/(?=.*?[A-Za-z])(?=.*\d)/.test(password)) {
    return true;
  }
  return false;
};

export const isPasswordLengthCorrect = password => {
  if (password.length > 5) {
    return true;
  }
  return false;
};

export const phoneNumberValidityCheck = number => {
  if (number.length >= 7 && number.length <= 14) {
    return true;
  }
  return false;
};

export const displayConsole = (key, value) => {
  console.log(`${key}`, value ? value : '');
};

export function showDistance(x1, y1, x2, y2) {
  var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

  return (distance / 0.62137).toFixed(2);
}
