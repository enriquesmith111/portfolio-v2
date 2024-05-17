import React from 'react';
import './fit-squad-project.css'
import TextRandomizer from '../Components/TextRandomizer'

export default function FitSquadProject() {
    return (
        <div>
            <div className='fit-squad-project-container'>
                <ProjectFitSquad />
            </div>
        </div>
    )
}

function ProjectFitSquad() {

    return (
        <div className='fit-squad-project'>
            <div>
                <ProjectText />
            </div>
            <ProjectImage />
        </div>
    );
}

function ProjectText() {
    return (
        <div className='fit-squad-text'>
            <TextRandomizer
                initialText="</FitSquad>"
            />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis earum perferendis, saepe aliquid culpa ut delectus officia laborum in non amet nemo atque quibusdam dolorem ad impedit, vitae velit voluptates aspernatur eos nesciunt maiores. Numquam repellat atque unde delectus deserunt distinctio, exercitationem perferendis, vero corrupti facilis sed quae eum, quibusdam ducimus mollitia. Natus eos rem praesentium est quos incidunt aut quisquam tempore ipsam doloremque, illo recusandae iusto sed blanditiis dignissimos fuga voluptas laborum molestias optio, deserunt eius! Dignissimos ipsa qui, magnam, tempora vel placeat inventore suscipit mollitia maxime quam eveniet natus error. Quos, in consequuntur totam ducimus maiores harum quod?</p>
        </div>
    )
}

function ProjectImage() {

    return (
        <div className='fit-squad-project-image'>
            <img src='empty-laptop.png' alt='empty-laptop' />
        </div>
    )
}