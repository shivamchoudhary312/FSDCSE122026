import React from 'react'
import ICard from './ICard'

function Gallery() {
    const student = [{
        pic : 'https://imgs.search.brave.com/MQRhPsP4OPIoR2DMdkOoXwM83T6oC02RxTLSpNk217g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL2Jr/SFpTNXVYMTRTUHl4/cG1fRFNES1RtVzdf/ak5rd043alFyemxT/TnVuVmgyRlM0UGl1/ZGlOYW16MlJnOUdI/VFMtOVNCTHlnU0tm/X0tJNDBpQWRzMk9p/dkdDTjI4YVozbEdF/VXBHM1RJR1FkYzhB/ZFotUEk9dzE0NDAt/aDgxMC1uLW51',
        name: "SHIVAM",
        roll: 9018,
        branch: "CSE",
        college: "ABESEC"

    },
    {
        pic : 'https://imgs.search.brave.com/R4t_7cnLKV4aSUBHFpy4hQ_wuEJ9pfsMXIj6QXRP3BI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waWNz/YXJ0LmNvbS9sYW5k/aW5ncy1zc3IvX25l/eHQvaW1hZ2UvP3Vy/bD1odHRwczovL2Nk/bi1jbXMtdXBsb2Fk/cy5waWNzYXJ0LmNv/bS9jbXMtdXBsb2Fk/cy9iYTQ2MWM1NS1k/ZmEyLTRmODYtYWI1/Mi0yNjk1NGI2Mzdi/OTIud2VicCZ3PTM4/NDAmcT03NQ',
        name: "SHIVAM",
        roll: 9018,
        branch: "CSE",
        college: "ABESEC"   

    },{
        pic : 'https://imgs.search.brave.com/mztqHdAGNEP0HzO61zmPPwDfqeYy0HfeY-XirqMZ_m8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmVlLWJhY2tn/cm91bmQtZnJlZS1p/bWFnZS5qcGVnP3c9/NjAwJnF1YWxpdHk9/ODA',
        name: "SHIVAM",
        roll: 9018,
        branch: "CSE",
        college: "ABESEC"

    },
    {
        pic : 'https://imgs.search.brave.com/idlO-r5CurbVVheflWd2reESzJZNv5y9nBP3tV7kq0A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/ODA5MTc5My9waG90/by90ZWNobm9sb2d5/LWFic3RyYWN0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1i/bU1UTTRVNk55dDA1/ZGQ2eEh2Z0JtMDll/ZkJhbDNFbjB5QW1s/VFJYYUk0PQ',
        name: "SHIVAM",
        roll: 9018,
        branch: "CSE",
        college: "ABESEC"

    }
// ]
//   return (
//     <div style= {{ display: 'flex' ,border: '5px solid darkpurple'}} >
//         <ICard data={student[0]} />
//         <ICard data={student[1]} />
//         <ICard data={student[2]} />

//     </div>

    // }
]
  return (
    <div style= {{ display: 'flex' ,border: '5px solid darkpurple'}} >
        <ICard data={student[0]} />
        <ICard data={student[1]} />
        <ICard data={student[2]} />
        <ICard data={student[3]} />
    
    </div>
  )
}

export default Gallery