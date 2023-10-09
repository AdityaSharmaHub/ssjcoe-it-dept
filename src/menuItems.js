export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
      submenu: [
        {
            title: 'HOD',
            url: '/hod',
        },
        {
            title: 'Contact',
            url: '/contact',
        },
        {
            title: 'Developers',
            url: '/developers',
        }
      ]
    },
    {
        title: 'Gallery',
        url: '/gallery',
    },
    {
        title: 'Faculty',
        url: '/faculty',
    },
    {
        title: 'Students',
        url: '/students',
        submenu: [
            {
                title: 'SE',
                url: '/se',
            },
            {
                title: 'TE',
                url: '/te',
            },
            {
                title: 'BE',
                url: '/be',
            }
          ]
    },
    {
        title: 'Alumni',
        url: '/alumni',
    },
    {
        title: 'Notices',
        url: '/notices',
    },
    {
        title: 'Login',
        url: '/login',
    },
  ];