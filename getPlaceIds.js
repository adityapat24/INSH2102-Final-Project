import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

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
    },
    {
      name: 'Smith Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '125 Day Blvd, Boston, MA 02127',
      coordinates: [42.363663, -71.131798],
    },
    {
      name: 'Ringer Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '85 Allston St, Boston, MA 02134',
      coordinates: [42.350498, -71.136711],
    },
    {
      name: 'Hobart Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '85 Hobart St, Boston, MA 02135',
      coordinates: [42.3555227, -71.1620402],
    },
    {
      name: 'Jackson Square',
      type: 'Malls, Squares, and Plazas',
      address: '58 Chestnut Hill Ave, Boston, MA 02135',
      coordinates: [42.3438411,-71.1529087],
    },
    {
      name: 'Rogers Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '30 Rogers Park Ave, Boston, MA 02135',
      coordinates: [42.3475104,-71.160769],
    },
    {
      name: 'McConnell Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '30 Denny Street, Boston, MA 02125',
      coordinates: [42.3081334,-71.0519784],
    },
    {
      name: 'Boston Common',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '139 Tremont St, Boston, MA 02111',
      coordinates: [42.3558198,-71.0625808],
    },
    {
      name: 'Boston Public Garden',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '4 Charles Street, Boston, MA 02116',
      coordinates: [42.3540368,-71.0696551],
    },
    {
      name: 'Myrtle Street Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '50 Myrtle St, Boston, MA 02114',
      coordinates: [42.3592719,-71.0664904],
    },
    {
      name: 'Copley Square Park',
      type: 'Malls, Squares, and Plazas',
      address: '560 Boylston St, Boston, MA 02116',
      coordinates: [42.3499671,-71.0770218],
    },
    {
      name: 'DeFlippo Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '135 Prince St, Boston, MA 02113',
      coordinates: [42.3660777,-71.0567661],
    },
    {
      name: 'Charter Street Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '21P Charter St, Boston, MA 02113',
      coordinates: [42.366574,-71.0533596],
    },
    {
      name: 'Polcari Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '45 Prince St, Boston, MA 02113',
      coordinates: [42.3648418,-71.0546798],
    },
    {
      name: 'City Hall Plaza',
      type: 'Malls, Squares, and Plazas',
      address: '1 City Hall Square, Boston, MA 02203',
      coordinates: [42.357766,-71.059299],
    },
    {
      name: 'Langone Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '543 Commercial St, Boston, MA 02109',
      coordinates: [42.3682054,-71.0562666],
    },
    {
      name: 'Angell Memorial Square',
      type: 'Malls, Squares, and Plazas',
      address: '158 Congress St, Boston, MA 02210',
      coordinates: [42.3559622,-71.0557783],
    },
    {
      name: 'Tai Tung Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '110 Tyler St, Boston, MA 02111',
      coordinates: [42.3484877,-71.0615],
    },
    {
      name: 'John Harvard Mall',
      type: 'Malls, Squares, and Plazas',
      address: '29 Harvard St, Boston, MA 02129',
      coordinates: [42.3725586,-71.0630678],
    },
    {
      name: 'Ryan Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '75 Alford St, Boston, MA 02129',
      coordinates: [42.385573,-71.072344],
    },
    {
      name: 'Hayes Square',
      type: 'Malls, Squares, and Plazas',
      address: '45 Bunker Hill St, Boston, MA 02129',
      coordinates: [42.376837,-71.0571379],
    },
    {
      name: 'East Boston Memorial Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '143 Porter St, Boston, MA 02128',
      coordinates: [42.3708789,-71.0324578],
    },
    {
      name: 'Noyes Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '86 Boardman St, Boston, MA 02128',
      coordinates: [42.3888903,-71.0108012],
    },
    {
      name: 'Cuneo Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '759 Saratoga St, Boston, MA 02128',
      coordinates: [42.383648,-71.016984],
    },
    {
      name: 'American Legion Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '25 Glendon St, Boston, MA 02128',
      coordinates: [42.3816445,-71.030186],
    },
    {
      name: 'Paris Street Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '115 Paris St, Boston, MA 02128',
      coordinates: [42.3723514,-71.0375476],
    },
    {
      name: 'Brophy Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '192 Webster St, Boston, MA 02128',
      coordinates: [42.365581,-71.0342123],
    },
    {
      name: 'Symphony Community Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '39 Edgerly Rd, Boston, MA 02115',
      coordinates: [42.3456272,-71.0879738],
    },
    {
      name: 'Edgerly Road Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '6 Edgerly Rd, Boston, MA 02115',
      coordinates: [42.3462647,-71.0879618],
    },
    {
      name: 'Amatucci Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '1460 Hyde Park Ave, Boston, MA 02136',
      coordinates: [42.2483773,-71.1269314],
    },
    {
      name: 'Mission Hill Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '60 Smith St, Boston, MA 02120',
      coordinates: [42.3341356,-71.0994919],
    },
    {
      name: 'Johnson Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '139 Green St, Jamaica Plain, MA 02130',
      coordinates: [42.3108001,-71.1079684],
    },
    {
      name: 'Walker Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '550 Norfolk St, Boston, MA 02126',
      coordinates: [42.2773225,-71.0922685],
    },
    {
      name: 'Cutillo Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '10 Stillman St, Boston, MA 02113',
      coordinates: [42.363745,-71.057422],
    },
    {
      name: 'Pagel Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '365 Hyde Park Ave, Boston, MA 02130',
      coordinates: [42.2885655,-71.1182586],
    },
    {
      name: 'Parkman Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '58 Wachusett St, Boston, MA 02130',
      coordinates: [42.2968051,-71.1125379],
    },
    {
      name: 'Fallon Field',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '910 South St, Boston, MA 02131',
      coordinates: [42.2877657,-71.1369227],
    },
    {
      name: 'Dudley Town Common',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '383 Dudley St, Boston, MA 02119',
      coordinates: [42.326124,-71.075546],
    },
    {
      name: 'Malcolm X Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '131 Dale St, Boston, MA 02119',
      coordinates: [42.3225015,-71.0883685],
    },
    {
      name: 'Horatio Harris Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '85 Harold St, Boston, MA 02119',
      coordinates: [42.3182915,-71.0892836],
    },
    {
      name: 'Marcella Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '260 Highland St, Boston, MA 02119',
      coordinates: [42.3234809,-71.0958867],
    },
    {
      name: 'Howes Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '68 Moreland St, Boston, MA 02119',
      coordinates: [42.324306,-71.079644],
    },
    {
      name: 'Kevin Fitzgerald Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '157 St Alphonsus St, Boston, MA 02120',
      coordinates: [42.3323354,-71.1019107],
    },
    {
      name: 'Bynoe Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '50 Orchard Park St, Boston, MA 02119',
      coordinates: [42.32921287359801,-71.07628102320072],
    },
    {
      name: 'Cristopher Lee Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '775 E 1st St, Boston, MA 02127',
      coordinates: [42.338137,-71.031502],
    },
    {
      name: 'Ronan Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '92 Mt Ida Rd, Dorchester, MA 02122',
      coordinates: [42.30376619059701,-71.06280414403064],
    },
    {
      name: 'Hemenway Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '540 Adams St, Boston, MA 02122',
      coordinates: [42.2916505,-71.0571718],
    },
    {
      name: 'Dorchester Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '2180 Dorchester Ave, Boston, MA 02124',
      coordinates: [42.2761934,-71.0671078],
    },
    {
      name: 'Garvey Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '340 Neponset Ave, Boston, MA 02122',
      coordinates: [42.2883,-71.0468839],
    },
    {
      name: 'Ventura Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '52-2 Ventura St, Boston, MA 02124',
      coordinates: [42.2708195,-71.0626346],
    },
    {
      name: 'Hayes Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '158 Warren Ave, Boston, MA 02118',
      coordinates: [42.3439311,-71.0755463],
    },
    {
      name: 'Blackstone Square',
      type: 'Malls, Squares, and Plazas',
      address: '1535 Washington St, Boston, MA 02118',
      coordinates: [42.33988585720332,-71.07340528811487],
    },
    {
      name: 'Worcester Square',
      type: 'Malls, Squares, and Plazas',
      address: '1P Worcester Square, Boston, MA 02118',
      coordinates: [42.33685695093592,-71.07494948963154],
    },
    {
      name: 'Carter Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '709 Columbus Ave, Boston, MA 02118',
      coordinates: [42.3381255,-71.0848429],
    },
    {
      name: 'Titus Sparrow Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '75 W Rutland Square, Boston, MA 02116',
      coordinates: [42.3432276,-71.0798116],
    },
    {
      name: 'Harriet Tubman Square',
      type: 'Malls, Squares, and Plazas',
      address: '450 Columbus Ave, Boston, MA 02118',
      coordinates: [42.34351316270865,-71.07780370886522],
    },
    {
      name: 'Billings Field',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '369 Lagrange St, Boston, MA 02132',
      coordinates: [42.2802907,-71.1568846],
    },
    {
      name: 'Ramler Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '130 Peterborough St, Boston, MA 02215',
      coordinates: [42.34269664094719,-71.10064208449465],
    },
    {
      name: 'Fan Pier Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '1 Courthouse Wy, Boston, MA 02210',
      coordinates: [42.3543649,-71.0467083],
    },
    {
      name: "Martin's Park",
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '64 Sleeper St, Boston, MA 02210',
      coordinates: [42.3529648,-71.0486419],
    },
    {
      name: 'Piers Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '95 Marginal St, Boston, MA 02128',
      coordinates: [42.3649069,-71.0377272],
    },
    {
      name: 'Castle Island',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '2010 William J Day Blvd, Boston, MA 02127',
      coordinates: [42.33777823127687,-71.01067096283575],
    },
    {
      name: 'Victory Road Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '81 Victory Rd, Boston, MA 02122',
      coordinates: [42.2967963,-71.0516969],
    },
    {
      name: 'Millenium Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '300 Gardner St, Boston, MA 02132',
      coordinates: [42.280786,-71.177266],
    },
    {
      name: 'Joe Moakley Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '1005 Columbia Rd, Boston, MA 02127',
      coordinates: [42.330267,-71.049177],
    },
    {
      name: 'Peabody Square',
      type: 'Malls, Squares, and Plazas',
      address: '573 Talbot Ave A, Dorchester, MA 02124',
      coordinates: [42.292728,-71.062343],
    },
    {
      name: 'McGann Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '266 West St, Boston, MA 02136',
      coordinates: [42.264285567714545,-71.12800621218565],
    },
    {
      name: 'Back Bay Fens',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '100 Park Dr, Boston, MA 02215',
      coordinates: [42.341719603370414,-71.09531508958614],
    },
    {
      name: 'Clifford Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '160 Norfolk Ave, Boston, MA 02119',
      coordinates: [42.3256787,-71.0701311],
    },
    {
      name: 'Hynes Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '502 VFW Pkwy, Boston, MA 02132',
      coordinates: [42.29479703310873,-71.15371559727166],
    },
    {
      name: 'Roxbury Heritage State Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '183 Roxbury St, Boston, MA 02119',
      coordinates: [42.3305909,-71.0907647],
    },
    {
      name: 'Cassidy Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '379 Chestnut Hill Ave, Chestnut Hill, MA 02467',
      coordinates: [42.327411,-71.165199],
    },
    {
      name: 'Portsmouth Street Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '35 Portsmouth St, Boston, MA 02135',
      coordinates: [42.359600862958864,-71.14535467847372],
    },
    {
      name: 'Roberts Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '56 Dunbar Ave, Boston, MA 02124',
      coordinates: [42.28595211289563,-71.07379738011223],
    },
    {
      name: 'Olmsted Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '217 Jamaicaway, Boston, MA 02130',
      coordinates: [42.32421357056328,-71.11584460321619],
    },
    {
      name: 'Raymond V. Mellone Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '308 N Harvard St, Boston, MA 02134',
      coordinates: [42.36072645735897,-71.12759764010089],
    },
    {
      name: "McLaughlin Playground",
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '239 Parker Hill Ave, Boston, MA 02120',
      coordinates: [42.32851695994667,-71.10263094737748],
    },
    {
      name: 'LoPresti Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '33 Sumner St, Boston, MA 02128',
      coordinates: [42.369748253386334,-71.04252174067128],
    },
    {
      name: 'Eliot Norton Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '295 Tremont St, Boston, MA 02116',
      coordinates: [42.348952,-71.0655943],
    },
    {
      name: 'Menino Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '98 16th St, Boston, MA 02129',
      coordinates: [42.378050039609334,-71.04823388457102],
    },
    {
      name: 'Franklin Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '1 Franklin Park Rd, Boston, MA 02121',
      coordinates: [42.3028346,-71.0876281],
    },
    {
      name: 'Ross Playground',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '145 Westminster St, Boston, MA 02136',
      coordinates: [42.2647989,-71.1144746],
    },
    {
      name: 'Fidelis Way Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '19P Jette Ct, Boston, MA 02135',
      coordinates: [42.347397030019586,-71.14349939939497],
    },
    {
      name: 'Peters Park',
      type: 'Parks, Playgrounds, and Athletic Fields',
      address: '230 Shawmut Ave, Boston, MA 02118',
      coordinates: [42.343678,-71.067797],
    },
  ];

async function getPlaceId(location) {
  const query = encodeURIComponent(`${location.name} ${location.address}`);
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${query}&inputtype=textquery&fields=place_id&key=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.candidates && data.candidates[0]) {
      return {
        ...location,
        placeId: data.candidates[0].place_id,
      };
    } else {
      console.warn(`❌ No result for: ${location.name}`);
      return {
        ...location,
        placeId: null,
      };
    }
  } catch (err) {
    console.error(`Error fetching placeId for ${location.name}:`, err);
    return {
      ...location,
      placeId: null,
    };
  }
}

async function main() {
  const results = await Promise.all(locations.map(getPlaceId));
  console.log('\n📍 Locations with Place IDs:\n');
  results.forEach((loc) => {
    console.log(`${loc.name}: ${loc.placeId || 'Not found'}`);
  });
}

main();
