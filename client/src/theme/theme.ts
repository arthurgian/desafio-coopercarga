export type ThemeType = 'light' | 'dark';

export interface Theme {
  name: ThemeType;
  colors: {
    primary: string;
    primaryHover: string;
    background: string;
    backgroundSecondary: string;
    text: string;
    textSecondary: string;
    border: string;
    buttonText: string;
    warning: string;
  };
  gradients: {
    background: string;
  };
}

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#264593',
    primaryHover: '#1E3A78',
    background: '#EBEBEB',
    backgroundSecondary: '#FFFFFF',
    text: '#282828',
    textSecondary: '#5A5A5A',
    border: '#D0D0D0',
    buttonText: '#FFFFFF',
    warning: '#FF5733',
  },
  gradients: {
    background: 'linear-gradient(180deg, #FFFFFF 0%, #F3F3F3 50%, #EBEBEB 100%)',
  },
};

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#264593',
    primaryHover: '#1E3A78',
    background: '#252525',
    backgroundSecondary: '#1A1A1A',
    text: '#EAEAEA',
    textSecondary: '#B0B0B0',
    border: '#3A3A3A',
    buttonText: '#FFFFFF',
    warning: '#FF5733',
  },
  gradients: {
    background: 'linear-gradient(180deg, #1A1A1A 0%, #222222 50%, #252525 100%)',
  },
};
