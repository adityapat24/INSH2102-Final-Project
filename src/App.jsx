import React, { useState, useEffect } from 'react';
import GoogleMap from './GoogleMap';

const locations = [
  {
    name: 'Wilson Park',
    type: 'Malls, Squares, and Plazas',
    address: '10 Wilson Park, Boston, MA 02135',
    coordinates: [42.341097, -71.145474],
    place_id: "ChIJM9hX30x444kR6oHwYKq9zvk"
  },
  {
    name: 'James H Roberts Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '112 Hooker St, Boston, MA 02134',
    coordinates: [42.359490, -71.125872],
    place_id: "ChIJHWO3kN5544kRexPwgXt-K9c"
  },
  {
    name: 'Smith Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '125 Day Blvd, Boston, MA 02127',
    coordinates: [42.363663, -71.131798],
    place_id: 'ChIJF4vym2J344kRpp_K5qLI0gg'
  },
  {
    name: 'Ringer Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '85 Allston St, Boston, MA 02134',
    coordinates: [42.350498, -71.136711],
    place_id: "ChIJlaZkaMl544kRZTI2SlQkyLk"
  },
  {
    name: 'Hobart Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '85 Hobart St, Boston, MA 02135',
    coordinates: [42.3555227, -71.1620402],
    place_id: "ChIJafmt2-J544kRNXDTbBIAlqQ"
  },
  {
    name: 'Jackson Square',
    type: 'Malls, Squares, and Plazas',
    address: '58 Chestnut Hill Ave, Boston, MA 02135',
    coordinates: [42.3438411,-71.1529087],
    place_id: "ChIJd5NqFkl444kRC0IFgqRZ4x4"
  },
  {
    name: 'Rogers Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '30 Rogers Park Ave, Boston, MA 02135',
    coordinates: [42.3475104,-71.160769],
    place_id: "ChIJAWpnV0Z444kRHtTP1hQRtyY"
  },
  {
    name: 'McConnell Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '30 Denny Street, Boston, MA 02125',
    coordinates: [42.3081334,-71.0519784],
    place_id: "ChIJBzfzxtd744kRvGiAyX00DD0"
  },
  {
    name: 'Boston Common',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '139 Tremont St, Boston, MA 02111',
    coordinates: [42.3558198,-71.0625808],
    place_id: "ChIJKyNuvJ1w44kRBE-pe_yDhj8"
  },
  {
    name: 'Boston Public Garden',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '4 Charles Street, Boston, MA 02116',
    coordinates: [42.3540368,-71.0696551],
    place_id: "ChIJu2Argp5w44kRAecWXgt_18s"
  },
  {
    name: 'Myrtle Street Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '50 Myrtle St, Boston, MA 02114',
    coordinates: [42.3592719,-71.0664904],
    place_id: "ChIJD9Myk5tw44kRcSMEEEhaCWI"
  },
  {
    name: 'Copley Square Park',
    type: 'Malls, Squares, and Plazas',
    address: '560 Boylston St, Boston, MA 02116',
    coordinates: [42.3499671,-71.0770218],
    place_id: "ChIJVWKj6g5644kRSLjjyMWdG70"
  },
  {
    name: 'DeFlippo Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '135 Prince St, Boston, MA 02113',
    coordinates: [42.3660777,-71.0567661],
    place_id: "ChIJsw35Hoxw44kROn8PNp0YwKM"
  },
  {
    name: 'Charter Street Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '21P Charter St, Boston, MA 02113',
    coordinates: [42.366574,-71.0533596],
    place_id: "ChIJoUioyYtw44kR9CIf4Zd3ME4"
  },
  {
    name: 'Polcari Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '45 Prince St, Boston, MA 02113',
    coordinates: [42.3648418,-71.0546798],
    place_id: "ChIJFUI03etx44kRFodijEuHZjg"
  },
  {
    name: 'City Hall Plaza',
    type: 'Malls, Squares, and Plazas',
    address: '1 City Hall Square, Boston, MA 02203',
    coordinates: [42.357766,-71.059299],
    place_id: "ChIJq-CSxqRx44kRiDV6SeNdWVs"
  },
  {
    name: 'Langone Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '543 Commercial St, Boston, MA 02109',
    coordinates: [42.3682054,-71.0562666],
    place_id: "ChIJ6diygIxw44kR92MflcNEOrk"
  },
  {
    name: 'Angell Memorial Square',
    type: 'Malls, Squares, and Plazas',
    address: '158 Congress St, Boston, MA 02210',
    coordinates: [42.3559622,-71.0557783],
    place_id: "ChIJOem-N8Nx44kRQrtDk8EHNVs"
  },
  {
    name: 'Tai Tung Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '110 Tyler St, Boston, MA 02111',
    coordinates: [42.3484877,-71.0615],
    place_id: "ChIJp-vJ_3l644kRWp724OzO1pI"
  },
  {
    name: 'John Harvard Mall',
    type: 'Malls, Squares, and Plazas',
    address: '29 Harvard St, Boston, MA 02129',
    coordinates: [42.3725586,-71.0630678],
    place_id: "ChIJ2dRPNplx44kRwSWbzXCY9mo"
  },
  {
    name: 'Ryan Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '75 Alford St, Boston, MA 02129',
    coordinates: [42.385573,-71.072344],
    place_id: "ChIJvccLEOdw44kRwQMmGNrTPGg"
  },
  {
    name: 'Hayes Square',
    type: 'Malls, Squares, and Plazas',
    address: '45 Bunker Hill St, Boston, MA 02129',
    coordinates: [42.376837,-71.0571379],
    place_id: "ChIJyaHTRvFw44kRBDv_ZSCBdNE"
  },
  {
    name: 'East Boston Memorial Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '143 Porter St, Boston, MA 02128',
    coordinates: [42.3708789,-71.0324578],
    place_id: "ChIJsU5KtkZw44kRF00BQtx0R2g"
  },
  {
    name: 'Noyes Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '86 Boardman St, Boston, MA 02128',
    coordinates: [42.3888903,-71.0108012],
    place_id: "ChIJx9bMbdFx44kRHMRsXfpCFQw"
  },
  {
    name: 'Cuneo Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '759 Saratoga St, Boston, MA 02128',
    coordinates: [42.383648,-71.016984],
    place_id: "ChIJs3_JKM1x44kRiY6Td3MFx3M"
  },
  {
    name: 'American Legion Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '25 Glendon St, Boston, MA 02128',
    coordinates: [42.3816445,-71.030186],
    place_id: "ChIJhaJdtktw44kR9jT4MbAfH1U"
  },
  {
    name: 'Paris Street Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '115 Paris St, Boston, MA 02128',
    coordinates: [42.3723514,-71.0375476],
    place_id: "ChIJS7V3C59x44kRfq_FT0RCtJ0"
  },
  {
    name: 'Brophy Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '192 Webster St, Boston, MA 02128',
    coordinates: [42.365581,-71.0342123],
    place_id: "ChIJZVAtO2Bx44kRFyGy6826p3M"
  },
  {
    name: 'Symphony Community Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '39 Edgerly Rd, Boston, MA 02115',
    coordinates: [42.3456272,-71.0879738],
    place_id: "ChIJ8dtxnkp744kR73kQjYSjmh0"
  },
  {
    name: 'Edgerly Road Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '6 Edgerly Rd, Boston, MA 02115',
    coordinates: [42.3462647,-71.0879618],
    place_id: "ChIJM-mSmXR744kRZRqDSj50LMk"
  },
  {
    name: 'Amatucci Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '1460 Hyde Park Ave, Boston, MA 02136',
    coordinates: [42.2483773,-71.1269314],
    place_id: "ChIJW1q4cHh_44kRfwJP4L4-aAI"
  },
  {
    name: 'Mission Hill Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '60 Smith St, Boston, MA 02120',
    coordinates: [42.3341356,-71.0994919],
    place_id: "ChIJv3UiyxB544kRhRkIK-EqPNY"
  },
  {
    name: 'Johnson Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '139 Green St, Jamaica Plain, MA 02130',
    coordinates: [42.3108001,-71.1079684],
    place_id: "ChIJVx2JJSx544kRzihvRFLePxE"
  },
  {
    name: 'Walker Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '550 Norfolk St, Boston, MA 02126',
    coordinates: [42.2773225,-71.0922685],
    place_id: "ChIJdyerkwZ844kROypuZy0iRQU"
  },
  {
    name: 'Cutillo Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '10 Stillman St, Boston, MA 02113',
    coordinates: [42.363745,-71.057422],
    place_id: "ChIJaxpIL49w44kR5lsnhwh_sW4"
  },
  {
    name: 'Pagel Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '365 Hyde Park Ave, Boston, MA 02130',
    coordinates: [42.2885655,-71.1182586],
    place_id: "ChIJO1gp7CV544kRtAr-5Nbddnc"
  },
  {
    name: 'Parkman Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '58 Wachusett St, Boston, MA 02130',
    coordinates: [42.2968051,-71.1125379],
    place_id: "ChIJzwBgm-9544kRGS-MhiNL3K8"
  },
  {
    name: 'Fallon Field',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '910 South St, Boston, MA 02131',
    coordinates: [42.2877657,-71.1369227],
    place_id: "ChIJqVf7M9R_44kRPYhmIQ3PIGI"
  },
  {
    name: 'Dudley Town Common',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '383 Dudley St, Boston, MA 02119',
    coordinates: [42.326124,-71.075546],
    place_id: "ChIJUx2Fxzd644kRCdipYmkwEAY"
  },
  {
    name: 'Malcolm X Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '131 Dale St, Boston, MA 02119',
    coordinates: [42.3225015,-71.0883685],
    place_id: "ChIJcQsTudh744kRu1rUKr6O3-0"
  },
  {
    name: 'Horatio Harris Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '85 Harold St, Boston, MA 02119',
    coordinates: [42.3182915,-71.0892836],
    place_id: "ChIJe0g0QNN744kRwr4ZxJjbHmM"
  },
  {
    name: 'Marcella Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '260 Highland St, Boston, MA 02119',
    coordinates: [42.3234809,-71.0958867],
    place_id: "ChIJZbwhjCp644kRuLgN48rLOT4"
  },
  {
    name: 'Howes Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '68 Moreland St, Boston, MA 02119',
    coordinates: [42.324306,-71.079644],
    place_id: "ChIJIcaKdnF744kR09YHtgvwOrY"
  },
  {
    name: 'Kevin Fitzgerald Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '157 St Alphonsus St, Boston, MA 02120',
    coordinates: [42.3323354,-71.1019107],
    place_id: "ChIJt7J-TI9544kR1c9GQC9n6jE"
  },
  {
    name: 'Bynoe Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '50 Orchard Park St, Boston, MA 02119',
    coordinates: [42.32921287359801,-71.07628102320072],
    place_id: "ChIJ_5tua5h744kRkLP99wYSiDU"
  },
  {
    name: 'Cristopher Lee Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '775 E 1st St, Boston, MA 02127',
    coordinates: [42.338137,-71.031502],
    place_id: "ChIJte68Upd644kRygiQ_vSSYUg"
  },
  {
    name: 'Ronan Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '92 Mt Ida Rd, Dorchester, MA 02122',
    coordinates: [42.30376619059701,-71.06280414403064],
    place_id: "ChIJoYCbuLp744kRWendEzCyz_U"
  },
  {
    name: 'Hemenway Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '540 Adams St, Boston, MA 02122',
    coordinates: [42.2916505,-71.0571718],
    place_id: "ChIJDTAkNpl744kRn4w5QmNpHzw"
  },
  {
    name: 'Dorchester Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '2180 Dorchester Ave, Boston, MA 02124',
    coordinates: [42.2761934,-71.0671078],
    place_id: "ChIJRWe013d844kRNjTDA6txjFg"
  },
  {
    name: 'Garvey Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '340 Neponset Ave, Boston, MA 02122',
    coordinates: [42.2883,-71.0468839],
    place_id: "ChIJVxESE3V744kRBJ7TnSI1Whc"
  },
  {
    name: 'Ventura Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '52-2 Ventura St, Boston, MA 02124',
    coordinates: [42.2708195,-71.0626346],
    place_id: "ChIJU6xjOPd944kRJU_qVgqPKP4"
  },
  {
    name: 'Hayes Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '158 Warren Ave, Boston, MA 02118',
    coordinates: [42.3439311,-71.0755463],
    place_id: "ChIJu2XzLvZ744kRfWHh9VFklMQ"
  },
  {
    name: 'Blackstone Square',
    type: 'Malls, Squares, and Plazas',
    address: '1535 Washington St, Boston, MA 02118',
    coordinates: [42.33988585720332,-71.07340528811487],
    place_id: "ChIJHz89HS1744kRNAD6Dk-A_Qo"
  },
  {
    name: 'Worcester Square',
    type: 'Malls, Squares, and Plazas',
    address: '1P Worcester Square, Boston, MA 02118',
    coordinates: [42.33685695093592,-71.07494948963154],
    place_id: "ChIJR-75ZRV644kRdvzo4SlpC8E"
  },
  {
    name: 'Carter Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '709 Columbus Ave, Boston, MA 02118',
    coordinates: [42.3381255,-71.0848429],
    place_id: "ChIJc2T3S9x744kRTm8O5We36ck"
  },
  {
    name: 'Titus Sparrow Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '75 W Rutland Square, Boston, MA 02116',
    coordinates: [42.3432276,-71.0798116],
    place_id: "ChIJoS5PexF644kRgNAaf-V1WY8"
  },
  {
    name: 'Harriet Tubman Square',
    type: 'Malls, Squares, and Plazas',
    address: '450 Columbus Ave, Boston, MA 02118',
    coordinates: [42.34351316270865,-71.07780370886522],
    place_id: "ChIJLRcSthN644kR7s4IlLIL8tU"
  },
  {
    name: 'Billings Field',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '369 Lagrange St, Boston, MA 02132',
    coordinates: [42.2802907,-71.1568846],
    place_id: "ChIJMQltKiV_44kRsbGl5xTCEvw"
  },
  {
    name: 'Ramler Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '130 Peterborough St, Boston, MA 02215',
    coordinates: [42.34269664094719,-71.10064208449465],
    place_id: "ChIJI1fH-_R544kRU9GMQHKJ7lc"
  },
  {
    name: 'Fan Pier Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '1 Courthouse Wy, Boston, MA 02210',
    coordinates: [42.3543649,-71.0467083],
    place_id: "ChIJxWMZfX5w44kR-KcuxAhVhtE"
  },
  {
    name: "Martin's Park",
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '64 Sleeper St, Boston, MA 02210',
    coordinates: [42.3529648,-71.0486419],
    place_id: "ChIJL5543eZx44kR3u7QOQXurzQ"
  },
  {
    name: 'Piers Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '95 Marginal St, Boston, MA 02128',
    coordinates: [42.3649069,-71.0377272],
    place_id: "ChIJ5aaO8WFx44kRlEYJE1-Dbg8"
  },
  {
    name: 'Castle Island',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '2010 William J Day Blvd, Boston, MA 02127',
    coordinates: [42.33777823127687,-71.01067096283575],
    place_id: "ChIJ7-GJrK9644kRInm_7z6TAFc"
  },
  {
    name: 'Victory Road Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '81 Victory Rd, Boston, MA 02122',
    coordinates: [42.2967963,-71.0516969],
    place_id: "ChIJA8_8VqB744kRrkXtB4uvhrw"
  },
  {
    name: 'Millenium Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '300 Gardner St, Boston, MA 02132',
    coordinates: [42.280786,-71.177266],
    place_id: "ChIJ_aCwZ1x_44kR_IK5aEADCn8"
  },
  {
    name: 'Joe Moakley Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '1005 Columbia Rd, Boston, MA 02127',
    coordinates: [42.330267,-71.049177],
    place_id: "ChIJ88PHH_Z644kRdcWoyyCvMsU"
  },
  {
    name: 'Peabody Square',
    type: 'Malls, Squares, and Plazas',
    address: '573 Talbot Ave A, Dorchester, MA 02124',
    coordinates: [42.292728,-71.062343],
    place_id: "ChIJIckEz49744kR46ZNOG8a_2o"
  },
  {
    name: 'McGann Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '266 West St, Boston, MA 02136',
    coordinates: [42.264285567714545,-71.12800621218565],
    place_id: "ChIJqxyvVOl-44kRqJgOmkzyi6E"
  },
  {
    name: 'Back Bay Fens',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '100 Park Dr, Boston, MA 02215',
    coordinates: [42.341719603370414,-71.09531508958614],
    place_id: "ChIJ3XyYKR5644kRad_7oDpJVm4"
  },
  {
    name: 'Clifford Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '160 Norfolk Ave, Boston, MA 02119',
    coordinates: [42.3256787,-71.0701311],
    place_id: "ChIJk8F2F0Z644kRQJhm-wAdzRg"
  },
  {
    name: 'Hynes Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '502 VFW Pkwy, Boston, MA 02132',
    coordinates: [42.29479703310873,-71.15371559727166],
    place_id: "ChIJ9yKAAdN444kRjcXyJvIfU7c"
  },
  {
    name: 'Roxbury Heritage State Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '183 Roxbury St, Boston, MA 02119',
    coordinates: [42.3305909,-71.0907647],
    place_id: "ChIJk0LPwCV644kRSTyszRxK2MY"
  },
  {
    name: 'Cassidy Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '379 Chestnut Hill Ave, Chestnut Hill, MA 02467',
    coordinates: [42.327411,-71.165199],
    place_id: "ChIJyX7rtVZ444kRIBzTBXFO9Q0"
  },
  {
    name: 'Portsmouth Street Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '35 Portsmouth St, Boston, MA 02135',
    coordinates: [42.359600862958864,-71.14535467847372],
    place_id: "ChIJnRbRLy1444kRUCRXLxai79U"
  },
  {
    name: 'Roberts Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '56 Dunbar Ave, Boston, MA 02124',
    coordinates: [42.28595211289563,-71.07379738011223],
    place_id: "ChIJm5hM04x744kRiackaUo6B68"
  },
  {
    name: 'Olmsted Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '217 Jamaicaway, Boston, MA 02130',
    coordinates: [42.32421357056328,-71.11584460321619],
    place_id: "ChIJB4_sfJ5544kRHxi7EfeXpSM"
  },
  {
    name: 'Raymond V. Mellone Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '308 N Harvard St, Boston, MA 02134',
    coordinates: [42.36072645735897,-71.12759764010089],
    place_id: "ChIJ_c8AV8N544kRMOqspwMBGu0"
  },
  {
    name: "McLaughlin Playground",
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '239 Parker Hill Ave, Boston, MA 02120',
    coordinates: [42.32851695994667,-71.10263094737748],
    place_id: "ChIJ4-4FkIZ544kRKXsqNRL0aQU"
  },
  {
    name: 'LoPresti Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '33 Sumner St, Boston, MA 02128',
    coordinates: [42.369748253386334,-71.04252174067128],
    place_id: "ChIJYZCJ4l1w44kRJepl5BZnZpQ"
  },
  {
    name: 'Eliot Norton Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '295 Tremont St, Boston, MA 02116',
    coordinates: [42.348952,-71.0655943],
    place_id: "ChIJa6ExynZ644kRY9QtxkTsfVw"
  },
  {
    name: 'Menino Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '98 16th St, Boston, MA 02129',
    coordinates: [42.378050039609334,-71.04823388457102],
    place_id: "ChIJubHZCPhx44kRp-IRRyV1Uq4"
  },
  {
    name: 'Franklin Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '1 Franklin Park Rd, Boston, MA 02121',
    coordinates: [42.3028346,-71.0876281],
    place_id: "ChIJme0fDdx744kRkewtCrKcph0"
  },
  {
    name: 'Ross Playground',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '145 Westminster St, Boston, MA 02136',
    coordinates: [42.2647989,-71.1144746],
    place_id: "ChIJnVemlbl_44kRhP94qL2loFI"
  },
  {
    name: 'Fidelis Way Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '19P Jette Ct, Boston, MA 02135',
    coordinates: [42.347397030019586,-71.14349939939497],
    place_id: "ChIJc5Q_YLV544kRRbhRu246DX0"
  },
  {
    name: 'Peters Park',
    type: 'Parks, Playgrounds, and Athletic Fields',
    address: '230 Shawmut Ave, Boston, MA 02118',
    coordinates: [42.343678,-71.067797],
    place_id: "ChIJFzxGC25644kRwUUIDN7Qi50"
  },
];

export default function App() {
  const [filter, setFilter] = useState('all');
  const [reviews, setReviews] = useState({});
  const [userLocation, setUserLocation] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (err) => console.error("Geolocation error:", err),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  const toggleFavorite = (name) => {
    setFavorites((prev) => {
      const isFavoriting = !prev.includes(name);
  
      if (isFavoriting && window.google) {
        const loc = locations.find((l) => l.name === name);
        if (loc && loc.place_id && !reviews[loc.name]) {
          const service = new window.google.maps.places.PlacesService(
            document.createElement('div')
          );
  
          console.log("Fetching reviews for:", loc.name);
  
          service.getDetails(
            {
              placeId: loc.place_id,
              fields: ['name', 'rating', 'reviews'],
            },
            (place, status) => {
              if (
                status === window.google.maps.places.PlacesServiceStatus.OK &&
                place.reviews
              ) {
                console.log("Fetched reviews:", place.reviews);
                setReviews((prevReviews) => ({
                  ...prevReviews,
                  [loc.name]: place.reviews.slice(0, 3),
                }));
              } else {
                console.warn("No reviews found for:", loc.name, "Status:", status);
              }
            }
          );
        }
      }
  
      return isFavoriting
        ? [...prev, name]
        : prev.filter((n) => n !== name);
    });
  };
  
  

  const filteredLocations =
    filter === 'all' || filter === 'All'
      ? locations
      : locations.filter((loc) => loc.type === filter);

  const sortedLocations = [
    ...filteredLocations.filter((loc) => favorites.includes(loc.name)),
    ...filteredLocations.filter((loc) => !favorites.includes(loc.name)),
  ];

  const countByType = filteredLocations.reduce((acc, loc) => {
    acc[loc.type] = (acc[loc.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <div style={{ width: '30%', marginRight: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="filter">Filter by type: </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Malls, Squares, and Plazas">Malls, Squares, and Plazas</option>
            <option value="Parks, Playgrounds, and Athletic Fields">Parks, Playgrounds, and Athletic Fields</option>
          </select>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, maxHeight: '150px', overflowY: 'auto', marginBottom: '10px' }}>
          {sortedLocations.map((loc) => (
            <li key={loc.name} style={{ marginBottom: '6px' }}>
              <strong>{loc.name}</strong>{' '}
              <button onClick={() => toggleFavorite(loc.name)} style={{ cursor: 'pointer' }}>
                {favorites.includes(loc.name) ? '★' : '☆'}
              </button>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '20px' }}>
          <h4>📊 Statistics</h4>
          <img
    src="/graphs.png"
    alt="Bar chart of location statistics"
    style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
  />
          <p>Total Locations: {filteredLocations.length}</p>
          <p>Favorites: {favorites.length}</p>
          {Object.entries(countByType).map(([type, count]) => (
            <p key={type}>
              {type}: {count}
            </p>
          ))}
        </div>
      </div>

      <div style={{ width: '70%', height: '600px' }}>
      <GoogleMap
        locations={sortedLocations}
        userLocation={userLocation ? { lat: userLocation[0], lng: userLocation[1] } : null}
        favorites={favorites}
        reviews={reviews}
      />
      </div>
    </div>
  );
}