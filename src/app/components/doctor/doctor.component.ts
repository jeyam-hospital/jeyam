import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss'
})
export class DoctorComponent {

  doctors = [
    {
      name: 'Dr.S.Loganathan M.B.B.S., D.Ortho., Mch.,Ortho',
      designation: 'Consultant, Orthopaedic Surgeon',
      specialty: 'Orthopedics',
      photo: 'assets/doctors/loganathan.jpg'
    },
    {
      name: 'Dr.B.Vijayah M.D., O.G., DNB., OG.,DLS.,FRM',
      designation: 'Consultant, Obstetrics & Gynecology, Laparoscopic Surgeon, Infertility Specialist',
      specialty: 'Gynecology & Infertility',
      photo: 'assets/doctors/vijayah.jpg'
    },
    {
      name: 'Dr. B.Nithya M.Sc., MPhil., Ph.D., PDF-CE',
      designation: 'Clinical Embryologist & Biochemist',
      specialty: 'Fertility & IVF',
      photo: 'assets/doctors/nithya.jpg'
    },
    {
      name: 'Dr.Veera Shri Vijayakumar M.B.B.S., M.S., O.G.',
      designation: 'Consultant, Gynecology',
      specialty: 'Gynecology',
      photo: 'assets/doctors/veera.jpg'
    },
    {
      name: 'Dr.Hammed Farooq M.B.B.S., M.S. (General Surgeon)',
      designation: 'Andrologist & Surgeon',
      specialty: 'General Surgery & Andrology',
      photo: 'assets/doctors/hammed.jpg'
    },
    {
      name: 'Dr.S.Karthika M.B.B.S., M.D. (Radio Diagnostics)',
      designation: 'Radiologist',
      specialty: 'Radiology',
      photo: 'assets/doctors/karthika.jpg'
    },
    {
      name: 'Dr.Shafudeen M.B.B.S., M.D. (Anaesthesiology)',
      designation: 'Anaesthetist',
      specialty: 'Anaesthesiology',
      photo: 'assets/doctors/shafudeen.jpg'
    },
    {
      name: 'Dr.B.Praveen Kumar M.B.B.S., M.D., Paediatrics',
      designation: 'Paediatrician',
      specialty: 'Paediatrics',
      photo: 'assets/doctors/praveen.jpg'
    },
    {
      name: 'Dr.J.Jayalalitha M.B.B.S., DCH.',
      designation: 'Paediatrician',
      specialty: 'Paediatrics',
      photo: 'assets/doctors/jayalalitha.jpg'
    },
    {
      name: 'Dr.Paneer Selvan M.B.B.S., M.S., Ortho.',
      designation: 'Orthopaedic Surgeon',
      specialty: 'Orthopedics',
      photo: 'assets/doctors/paneer.jpg'
    },
    {
      name: 'Dr.Felix Emerson D.N.B., Ortho',
      designation: 'Orthopaedic Surgeon',
      specialty: 'Orthopedics',
      photo: 'assets/doctors/felix.jpg'
    },
    {
      name: 'Dr.Ratheesh M.B.B.S., M.D.',
      designation: 'General Medicine Physician',
      specialty: 'General Medicine',
      photo: 'assets/doctors/ratheesh.jpg'
    },
    {
      name: 'Dr.S.Panchali M.B.B.S., M.S.',
      designation: 'General Surgeon',
      specialty: 'Surgery',
      photo: 'assets/doctors/panchali.jpg'
    },
    {
      name: 'Dr.Nagaraj M.B.B.S., M.S., M.C.W Urology',
      designation: 'Urologist & Andrologist',
      specialty: 'Urology & Andrology',
      photo: 'assets/doctors/nagaraj.jpg'
    },
    {
      name: 'Dr.R.Chandramurali M.B.B.S., M.CH Urology',
      designation: 'Urologist & Andrologist',
      specialty: 'Urology & Andrology',
      photo: 'assets/doctors/chandramurali.jpg'
    },
    {
      name: 'Br.V.Mohan Kumar M.B.B.S., Diploma in Anaesthesia',
      designation: 'Anaesthetist',
      specialty: 'Anaesthesiology',
      photo: 'assets/doctors/mohan.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
