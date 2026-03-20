import "./constitutions.css"

const names = [
    "ups-constitution-05-10-2023.pdf",
    "ups-constitution-13-10-2020.pdf",
    "ups-constitution-27-02-2020.pdf",
    "ups-constitution-25-02-2015.pdf",
]


export default function Constitutions() {
  return (
    <div className='ups__resources-constitutions'>
        <h2>Current Constitution</h2>
        <div>
            
            <div className='ups__resources-constitutions_link_box'>
                <a href={process.env.PUBLIC_URL + "/assets/constitutions/ups-constitution-05-10-2023.pdf"} target="_blank" rel="noopener noreferrer">TBA</a>
            </div>
        </div>
        <h2>Past Constitutions</h2>
        <div className='ups__docs-past-container'>
            
            {names.map((doc) => (
                <div key={doc} className='ups__resources-constitutions_link_box'>
                    <a href={process.env.PUBLIC_URL + "/assets/constitutions/" + doc} target='_blank' rel="noopener noreferrer">
                    {doc.replace('ups-constitution-', '').replace('.pdf', '').replaceAll('-','/')}
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}