import surveillanceImage from '@/assets/surveillance.jpg'
import plantImage from '@/assets/plant-analysis.jpg'

export const profile = {
  name: 'Yasvand A K', title: 'Artificial Intelligence & Data Science Student',
  email: 'yasvandak@gmail.com', phone: '7904715141', location: 'Trichy, Tamil Nadu, India',
  github: 'https://github.com/yasvandak', linkedin: 'https://linkedin.com/in/yasvandak',
  summary: 'AI & Data Science undergraduate with hands-on experience developing machine learning and computer vision applications. Passionate about building practical AI solutions and continuously improving through real-world projects, hackathons, and collaborative development.',
}
export const projects = [
  {
    id: 'leaf-disease', number: '01', title: 'Plant Disease Detection Using CNN', shortTitle: 'Leaf disease detection.', role: 'AI Developer', image: plantImage,
    alt: 'Concept visualization of AI analysis identifying plant disease on a leaf', category: 'DEEP LEARNING',
    github: 'https://github.com/yasvandak/leaf_disease_detection',
    description: 'A deep learning project for classifying plant leaf diseases from images using convolutional neural networks and a Flask-based deployment interface.',
    tags: ['PyTorch', 'Convolutional Neural Networks', 'Flask'],
    features: ['Leaf disease classification', 'CNN-based image recognition', 'Flask web interface', 'Disease diagnosis workflow', 'Dataset-driven model training', 'Open-source contribution'],
    problem: 'Manual plant disease inspection is slow, inconsistent, and requires expert knowledge that is often unavailable in time-sensitive farming scenarios.',
    solution: 'Developed a CNN-based plant disease detection system that classifies leaf images into multiple disease categories using a practical AI pipeline and web app interface.',
    contribution: 'Built and contributed to the model workflow, deployment setup, and project documentation for a real-world crop health monitoring solution.',
    achievement: 'AI Project',
  },
  {
    id: 'object-detection', number: '02', title: 'Object Detection Security System', shortTitle: 'Smart security monitoring.', role: 'Computer Vision Developer', image: surveillanceImage,
    alt: 'Concept visualization of a smart surveillance system detecting people in a monitored zone', category: 'COMPUTER VISION',
    github: 'https://github.com/yasvandak/object_detection',
    description: 'A real-time security monitoring system that uses YOLOv8 object detection, ROI selection, alarm triggering, and email alerts to detect suspicious activity from a live camera feed.',
    tags: ['YOLOv8', 'OpenCV', 'Security Monitoring'],
    features: ['Live camera monitoring', 'Person detection with YOLOv8', 'Region-of-interest tracking', 'Alarm activation', 'Captured image saving', 'Email notifications'],
    problem: 'Traditional monitoring systems rely heavily on manual supervision and often miss suspicious events in real time.',
    solution: 'Built an intelligent surveillance system combining object detection, motion detection, ROI logic, and alert automation for timely security monitoring.',
    contribution: 'Contributed to motion detection, ROI implementation, image capture logic, and practical system integration for automated security alerts.',
    achievement: 'AI Security Project',
  },
]
export type Project = typeof projects[number]
export const certifications = ['NPTEL – Internet of Things', 'MongoDB – MongoDB Basics', 'NVIDIA – Fundamentals of Deep Learning', 'Java Programming', 'ML with AI Applications']
export function pageHead(title: string, description: string, path: string) {
  return {
    meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: path }, { name: 'twitter:card', content: 'summary_large_image' }, { name: 'twitter:title', content: title }, { name: 'twitter:description', content: description }],
    links: [{ rel: 'canonical', href: path }],
  }
}
