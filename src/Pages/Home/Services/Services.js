import React from 'react';
import Service from './Service';
import { RiStethoscopeFill, RiCapsuleFill, RiEyeFill, RiPsychotherapyFill, RiMicroscopeFill, RiPulseFill, RiEmpathizeFill, RiMindMap, RiMentalHealthFill, RiAppleFill, RiInfraredThermometerFill} from "react-icons/ri";



const Services = () => {
    const serviceData =[
        {
            id: 1, 
            name: 'Primary Care',
            description: 'Primary care practice serves as the patient"s entry point into the health care system and as the continuing focal point for all needed health care services',
            icon: <RiStethoscopeFill size= '40px'></RiStethoscopeFill>
        },
        {
            id: 2, 
            name: 'Dental Care',
            description: 'Professional cleaning includes scaling and polishing. This procedure uses instruments to loosen and remove deposits from the teeth',
            icon: <RiCapsuleFill size= '40px'></RiCapsuleFill>
        },
        {
            id: 3, 
            name: 'Eye Care',
            description: 'Eye care services are virtually non-existing at rural community level and upazila level.Comprehensive eye care aims to ensure that people have access to eye care services that meet their needs at every stage of life.',
            icon: <RiEyeFill size= '40px'></RiEyeFill>
        },
        {
            id: 4, 
            name: 'Psychotherapy',
            description: 'Psychotherapy (sometimes called talk therapy) refers to a variety of treatments that aim to help a person identify and change troubling emotions, thoughts.',
            icon: <RiPsychotherapyFill size= '40px'></RiPsychotherapyFill>
        },
        {
            id: 5, 
            name: 'Orthopedic',
            description: 'Orthopedic surgeons use both surgical and nonsurgical means to treat musculoskeletal trauma, spine diseases, sports injuries, degenerative diseases, infections.',
            icon: <RiMicroscopeFill size= '40px'></RiMicroscopeFill>
        },
        {
            id: 6, 
            name: 'Cardiology',
            description: 'Physicians who specialize in cardiology are called cardiologists and they are responsible for the medical management of various heart diseases.',
            icon: <RiPulseFill size= '40px'></RiPulseFill>
        },
        {
            id: 7, 
            name: 'Gynecology',
            description: 'Gynecology is the medical specialty of female health, particularly the reproductive system.A gynecologist is a surgeon who specializes in the female reproductive system, which includes the cervix, fallopian tubes, ovaries, uterus.',
            icon: <RiEmpathizeFill size= '40px'></RiEmpathizeFill>
        },
        {
            id: 8, 
            name: 'Neurology',
            description: 'Neurology is the branch of medicine that deals with disorders of the nervous system, which include the brain, blood vessels.',
            icon: <RiMindMap size= '40px'></RiMindMap>
        },
        {
            id: 9, 
            name: 'Dermatologists',
            description: 'Dermatologists are medical doctors who specialize in skin, hair and nails. Dermatologists also handle cosmetic disorders, like hair loss.Dermatology is the medical discipline that is concerned with the diagnosis and treatment of diseases of the skin, hair, and nails in both children and adults.',
            icon: <RiMentalHealthFill size= '40px'></RiMentalHealthFill>
        },
        {
            id: 10, 
            name: 'Nutritionists',
            description: 'Providing nutrition therapy to manage illnesses/health conditions; Overseeing community education programs; Giving nutrition advice and counseling to clients.',
            icon: <RiAppleFill size= '40px'></RiAppleFill>
        },
        {
            id: 11, 
            name: 'Physical Therapists',
            description: 'Physical therapists are movement experts who improve quality of life through prescribed exercise, hands-on care, and patient education',
            icon: <RiInfraredThermometerFill size= '40px'></RiInfraredThermometerFill>
        }
    ]

    return (
        <div className='container mx-auto px-4'>
            <h2 className="text-center mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-3xl">Our Medical Services</h2>
            <div className='grid gap-5 xs:grid-l md:grid-cols-2 lg:grid-cols-3 mt-20'>
                {
                    serviceData.map(service=> <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;