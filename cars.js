// ============ KODYKE CAR LISTINGS — edit this file to update THE CAR SOURCING page ============
// To ADD a car: copy one whole { ... } block, paste it after a comma, and change the details.
// country must be exactly 'China' or 'USA'.  Brands and models appear automatically.
// desc  = the short description people read.  specs = small tags (engine, power, battery in kWh, gearbox, etc.).
// IMPORTANT: check desc and specs against the ACTUAL car you are selling (year, trim, mileage, colour, condition)
// and add details such as mileage and colour as extra specs, e.g. 'Mileage: 45,000 km'.
// To mark SOLD: change status to 'sold'.  Available again: status:'available'.
// To use your OWN photo: upload the photo next to this file on GitHub and set img:'camry1.jpg'.
// Delete sample:true on a car once it is a real listing (samples show a "Sample listing" tag).
var CARS=[
{country:'USA',brand:'Toyota',model:'Camry',title:'Toyota Camry LE 2019',price:'₦18,500,000',status:'available',img:'',
 desc:'A comfortable, fuel-smart family saloon known for reliability and low running costs. Smooth to drive in Lagos traffic and on the highway.',
 specs:['2.5L 4-cylinder petrol', '203 hp', '8-speed automatic', 'Front-wheel drive', '5 seats'],sample:true},
{country:'USA',brand:'Toyota',model:'Camry',title:'Toyota Camry XLE 2020',price:'₦24,000,000',status:'sold',img:'',
 desc:'The upmarket Camry: the same strong 2.5L engine with a more premium cabin and extra comfort features.',
 specs:['2.5L 4-cylinder petrol', '203 hp', '8-speed automatic', 'Front-wheel drive', 'Premium XLE trim'],sample:true},
{country:'USA',brand:'Toyota',model:'Corolla',title:'Toyota Corolla LE 2017',price:'₦11,500,000',status:'available',img:'',
 desc:'A dependable and economical everyday car, loved for easy maintenance and spare parts that are simple to find.',
 specs:['1.8L 4-cylinder petrol', '132 hp', 'CVT automatic', 'Front-wheel drive', '5 seats'],sample:true},
{country:'USA',brand:'Nissan',model:'Altima',title:'Nissan Altima SV 2019',price:'₦14,200,000',status:'available',img:'',
 desc:'A roomy, quiet saloon with a refined ride, good for long trips and daily driving.',
 specs:['2.5L 4-cylinder petrol', '188 hp', 'Xtronic CVT', 'Front-wheel drive', '5 seats'],sample:true},
{country:'USA',brand:'Tesla',model:'Model 3',title:'Tesla Model 3 Long Range 2021',price:'₦38,000,000',status:'sold',img:'',
 desc:'A fully electric saloon with no fuel cost, fast acceleration and a large touchscreen in place of traditional buttons.',
 specs:['Dual-motor all-wheel drive', 'About 75 kWh battery', '353 miles (568 km) EPA range', '0–60 mph in 4.2 s', 'Electric'],sample:true},
{country:'China',brand:'BYD',model:'Seal',title:'BYD Seal 2023',price:'₦32,000,000',status:'available',img:'',
 desc:'A sleek electric saloon with BYD’s Blade battery, a modern digital cabin and long driving range.',
 specs:['82.5 kWh Blade battery', 'Up to 700 km (CLTC) range', 'Rear-wheel drive', '0–100 km/h in about 5.9 s', 'Electric'],sample:true},
{country:'China',brand:'Chery',model:'Tiggo 8',title:'Chery Tiggo 8 2023',price:'₦28,500,000',status:'available',img:'',
 desc:'A spacious family SUV with a turbocharged engine, a roomy cabin and plenty of boot space for the whole family.',
 specs:['1.6L turbo petrol', 'About 197 hp', '7-speed automatic (DCT)', '5 or 7 seats, by trim', 'SUV'],sample:true},
{country:'China',brand:'Geely',model:'Coolray',title:'Geely Coolray 2022',price:'₦21,000,000',status:'sold',img:'',
 desc:'A stylish compact SUV that is lively to drive, with a modern cabin and a good level of features for the price.',
 specs:['1.5L turbo petrol', 'About 177 hp', '7-speed automatic (DCT)', 'Front-wheel drive', 'Compact SUV'],sample:true}
];
