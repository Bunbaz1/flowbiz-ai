export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Enrolled';
export type Lead = { id: string; name: string; email: string; course: string; source: string; status: LeadStatus; date: string; initials: string; color: string };
export const leads: Lead[] = [
 {id:'LD-2048',name:'Amelia Johnson',email:'amelia.j@email.com',course:'Product Design Masterclass',source:'Website',status:'Qualified',date:'Today, 10:42 AM',initials:'AJ',color:'lavender'},
 {id:'LD-2047',name:'Noah Williams',email:'noah.w@email.com',course:'Full-Stack Development',source:'Instagram',status:'New',date:'Today, 9:18 AM',initials:'NW',color:'peach'},
 {id:'LD-2046',name:'Sophia Chen',email:'sophia.chen@email.com',course:'Data Analytics',source:'Referral',status:'Contacted',date:'Yesterday',initials:'SC',color:'mint'},
 {id:'LD-2045',name:'Ethan Brown',email:'ethan.b@email.com',course:'Product Design Masterclass',source:'LinkedIn',status:'Enrolled',date:'Yesterday',initials:'EB',color:'blue'},
 {id:'LD-2044',name:'Olivia Martin',email:'olivia.m@email.com',course:'Digital Marketing',source:'Website',status:'New',date:'Nov 19, 2026',initials:'OM',color:'pink'},
 {id:'LD-2043',name:'Liam Davis',email:'liam.d@email.com',course:'Full-Stack Development',source:'Instagram',status:'Contacted',date:'Nov 19, 2026',initials:'LD',color:'yellow'}
];
export const courses = [
 {name:'Product Design Masterclass',category:'Design',students:84,price:'$249',progress:78,status:'Active',color:'purple'},
 {name:'Full-Stack Development',category:'Technology',students:126,price:'$399',progress:62,status:'Active',color:'blue'},
 {name:'Data Analytics',category:'Business',students:58,price:'$299',progress:91,status:'Active',color:'green'},
 {name:'Digital Marketing',category:'Marketing',students:42,price:'$199',progress:34,status:'Draft',color:'orange'}
];
export const students = [
 {name:'Ethan Brown',email:'ethan.b@email.com',course:'Product Design Masterclass',joined:'Nov 20, 2026',payment:'Paid',initials:'EB'},
 {name:'Mia Wilson',email:'mia.w@email.com',course:'Full-Stack Development',joined:'Nov 20, 2026',payment:'Paid',initials:'MW'},
 {name:'James Taylor',email:'james.t@email.com',course:'Data Analytics',joined:'Nov 19, 2026',payment:'Pending',initials:'JT'},
 {name:'Ava Anderson',email:'ava.a@email.com',course:'Product Design Masterclass',joined:'Nov 18, 2026',payment:'Paid',initials:'AA'},
 {name:'Lucas Thomas',email:'lucas.t@email.com',course:'Digital Marketing',joined:'Nov 17, 2026',payment:'Pending',initials:'LT'}
];
