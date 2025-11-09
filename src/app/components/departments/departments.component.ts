import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent {
 ortho = [
    { title: 'Orthopedic Surgeons', description: 'Experts in joint replacement, trauma surgery, and complex reconstructions.' },
    { title: 'Sports Medicine Specialists', description: 'Prevention, diagnosis, and treatment of sports injuries with rehab plans.' },
    { title: 'Spine Surgeons', description: 'Specialized in spine disorder management, surgical & non-surgical.' },
    { title: 'Orthopedic Anaesthesiologists', description: 'Ensuring pain-free procedures with advanced anesthetic techniques.' },
    { title: 'Physiotherapists', description: 'Post-op rehab to restore function and strength.' },
    { title: 'Pediatric Orthopedists', description: 'Care for children with musculoskeletal conditions.' },
  ];

  ivf = [
    { title: 'Reproductive Endocrinologists', description: 'Hormonal evaluation and complex infertility solutions.' },
    { title: 'Clinical Embryologists', description: 'ICSI, embryo culture, freezing, and blastocyst transfer.' },
    { title: 'Andrologists', description: 'Male infertility testing and sperm retrieval techniques.' },
  ];

  obstetrics = [
    { title: 'Obstetricians', description: 'Care from conception to delivery for normal & high-risk pregnancies.' },
    { title: 'Fetal Medicine Experts', description: 'Anomaly scans, fetal echocardiograms, and genetic testing.' },
    { title: 'High-Risk Pregnancy Unit', description: 'Managing preeclampsia, gestational diabetes, multiple gestation, etc.' },
  ];

  gyn = [
    { title: 'Gynecologic Laparoscopic Surgeons', description: 'Minimally invasive surgeries for fibroids, cysts, etc.' },
    { title: 'Hysteroscopy Experts', description: 'Diagnosing intrauterine problems like polyps, adhesions, etc.' },
    { title: 'Menopause & Midlife Care', description: 'Hormonal therapy, bone health, and lifestyle counseling.' },
  ];
}
