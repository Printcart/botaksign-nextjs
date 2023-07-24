export const headerData = {
  logo: {
    src: 'https://botaksign.com/wp-content/uploads/2020/05/Botak-Logo_v3.png',
    title: 'Logo Botak'
  },
  icon: {
    prefix: 'fas',
    iconName: 'bag-shopping'
  }
};

export const menus = [
  {
    id: '1',
    title: {
      rendered: 'Home'
    },
    status: 'publish',
    url: '/'
  },
  {
    id: '2',
    title: {
      rendered: 'Promotion'
    },
    status: 'publish',
    url: '/#'
  },
  {
    id: '3',
    title: {
      rendered: 'New Products'
    },
    status: 'publish',
    url: '/#'
  },
  {
    id: '4',
    title: {
      rendered: 'Printing Products'
    },
    status: 'publish',
    url: '/#',
    subMenu: [
      {
        id: '1',
        title: {
          rendered: 'Stickers & Labels'
        },
        status: 'publish',
        url: '/stickers-labels',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Wall Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'Labels Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Backlit Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Vehicle Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Color Vinyl Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '6',
              title: {
                rendered: 'Window Glass Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '7',
              title: {
                rendered: 'Miscellaneous Stickers'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '2',
        title: {
          rendered: 'Banners & Signs'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Banners & Signs',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Express Banner'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'Standard Banner'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Huge Banner'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Acrylic Signs'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Aluminum Signs'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '6',
              title: {
                rendered: 'Corrugated Plastic Signs'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '7',
              title: {
                rendered: 'Outdoor Polycarbonate Signs'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '8',
              title: {
                rendered: 'Singapore Standard Safety Signs'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '9',
              title: {
                rendered: 'Miscellanneous Signs'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '3',
        title: {
          rendered: 'Posters & Cards'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Art Card Posters'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'Hard Laminated Posters'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Waterproof Posters'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Large Format Foam Board Poster'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Large Format Poster'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '6',
              title: {
                rendered: 'Outdoor Corrugated Poster'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '7',
              title: {
                rendered: 'Postcards'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '8',
              title: {
                rendered: 'Invitation Cards'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '9',
              title: {
                rendered: 'Certificates'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '4',
        title: {
          rendered: 'Marketing Materials'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Distribution Products'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'Counter Top Displays'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Floor Display Stands'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Wearable Displays'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Wall Displays'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '6',
              title: {
                rendered: 'Plastic Cards'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '7',
              title: {
                rendered: 'Name Cards'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '5',
        title: {
          rendered: 'Foam Board Products'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Large Format Foam Board Poster'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: '$2 Foam Board Poster (Single side only)'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Small Format Foam Board Poster'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Foam Board Poster with Wooden Frame'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Sticker Foam Wrap'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '6',
              title: {
                rendered: 'Foam Board With Clear Eyelets'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '7',
              title: {
                rendered: 'Custom Shape Foam Board Poster'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '8',
              title: {
                rendered: ' Foam Board Table Standee'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '9',
              title: {
                rendered: 'Big Mockup Cheque'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '10',
              title: {
                rendered: 'Chrome Board'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '11',
              title: {
                rendered: '  Hand Sign Board'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '12',
              title: {
                rendered: 'Props'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '13',
              title: {
                rendered: ' Selfie Frames'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '14',
              title: {
                rendered: 'Oversize Foam Board Tiling'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '6',
        title: {
          rendered: 'Gifts & Décor'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Interior Decoration'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: ' Artist Canvas With Frame'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: ' Hard Board Photo Wraps'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Wall Murals & Hoarding Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Printed Frosted Stickers'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '7',
        title: {
          rendered: 'Industry & Essentials'
        },
        status: 'publish',
        url: '/banners-signs',

        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Events'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'E-Commerce'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Corporate Marketing'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Vehicle Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Retail and Supermarket'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '8',
        title: {
          rendered: 'Board Printing / Cutting'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Cardboard Printing / Cutting'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'Foam Board Printing / Cutting'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'PVC Board Printing / Cutting'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'PVC or PC Sheet Printing / Cutting'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      }
    ]
  },
  {
    id: '5',
    title: {
      rendered: 'Display Products'
    },
    status: 'publish',
    url: '/#',
    subMenu: [
      {
        id: '1',
        title: {
          rendered: 'Display System With Print'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Wall Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'Labels Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Backlit Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Vehicle Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Color Vinyl Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '6',
              title: {
                rendered: 'Window Glass Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '7',
              title: {
                rendered: 'Miscellaneous Stickers'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '2',
        title: {
          rendered: 'Display Stand'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Wall Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'Labels Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Backlit Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Vehicle Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Color Vinyl Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '6',
              title: {
                rendered: 'Window Glass Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '7',
              title: {
                rendered: 'Miscellaneous Stickers'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '3',
        title: {
          rendered: 'Posters & Frame'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Wall Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'Labels Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Backlit Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Vehicle Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Color Vinyl Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '6',
              title: {
                rendered: 'Window Glass Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '7',
              title: {
                rendered: 'Miscellaneous Stickers'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '4',
        title: {
          rendered: 'Table Top Display'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Wall Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'Labels Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Backlit Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Vehicle Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Color Vinyl Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '6',
              title: {
                rendered: 'Window Glass Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '7',
              title: {
                rendered: 'Miscellaneous Stickers'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '5',
        title: {
          rendered: 'Accessories, Tapes & Tools'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Wall Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'Labels Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Backlit Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Vehicle Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Color Vinyl Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '6',
              title: {
                rendered: 'Window Glass Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '7',
              title: {
                rendered: 'Miscellaneous Stickers'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '6',
        title: {
          rendered: 'System Only (Without Print)'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Wall Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'Labels Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Backlit Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Vehicle Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Color Vinyl Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '6',
              title: {
                rendered: 'Window Glass Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '7',
              title: {
                rendered: 'Miscellaneous Stickers'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '7',
        title: {
          rendered: 'Print Only (Without System)'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Wall Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'Labels Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Backlit Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Vehicle Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Color Vinyl Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '6',
              title: {
                rendered: 'Window Glass Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '7',
              title: {
                rendered: 'Miscellaneous Stickers'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      },
      {
        id: '8',
        title: {
          rendered: 'Ready Sign'
        },
        status: 'publish',
        url: '/banners-signs',
        subMenuEnd: {
          parent: 'Stickers & Labels',
          menus: [
            {
              id: '1',
              title: {
                rendered: 'Wall Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '2',
              title: {
                rendered: 'Labels Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '3',
              title: {
                rendered: 'Backlit Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '4',
              title: {
                rendered: 'Vehicle Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '5',
              title: {
                rendered: 'Color Vinyl Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '6',
              title: {
                rendered: 'Window Glass Stickers'
              },
              status: 'publish',
              url: '/'
            },
            {
              id: '7',
              title: {
                rendered: 'Miscellaneous Stickers'
              },
              status: 'publish',
              url: '/'
            }
          ]
        }
      }
    ]
  },
  {
    id: '6',
    title: {
      rendered: 'Guides'
    },
    status: 'publish',
    url: '/#',
    subMenu: [
      {
        id: '1',
        title: {
          rendered: 'FAQ'
        },
        status: 'publish',
        url: '/banners-signs'
      },
      {
        id: '2',
        title: {
          rendered: 'Colour Charts'
        },
        status: 'publish',
        url: '/banners-signs'
      },
      {
        id: '3',
        title: {
          rendered: 'Corporate Partner'
        },
        status: 'publish',
        url: '/banners-signs'
      }
    ]
  },
  {
    id: '7',
    title: {
      rendered: 'Contact Us'
    },
    status: 'publish',
    url: '/banners-signs'
  },
  {
    id: '8',
    title: {
      rendered: 'Careers'
    },
    status: 'publish',
    url: '/banners-signs'
  }
];
