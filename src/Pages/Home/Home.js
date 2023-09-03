import React from 'react';
import { useState } from 'react';
import HomeCSS from './Home.module.css';
import HomeCard from '../../Components/HomeCard/HomeCard';
import { useTheme } from '../../Context/ThemeContext';

const Home = () => {

    const data = [
        {
            id: 1,
            writerImg:'https://www.spectator.co.uk/wp-content/uploads/2021/01/Charles-Yu-%C2%A9-Tina-Chiou._r1.jpg',
            writer: "Son Heung-min",
            date: "29 Dec 2021",
            title: "will AI end humnaity",
            details: `But experts have rubbished the idea. "This science fiction concept is unlikely to become a reality in the coming decades if ever at all," the Stop Killer Robots campaign group wrote in a 2021 report. However, the group has warned that giving machines the power to make decisions on life and death is an existential risk.`,
            articaleImg: "https://cdn.vox-cdn.com/thumbor/8l0gFhDyIR-9nZD_OAk3RILpn2E=/0x0:2743x2057/1400x1050/filters:focal(0x0:2743x2057):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/37304644/Terminator-Salvation.0.0.jpg"
        },
        {
            id: 2,
            writerImg:'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS3EHb53PF1nll3jSZceCz1LwNm2yMCHrk6vGYioyPD83pRqeJiDrnEfOVJ8yTcQnhJZsQM4wvQ0FVzzEQ',
            writer: "Christiane Amanpour",
            date: "29 Dec 2021",
            title: "Trump sues E. Jean Carroll for defamation over rape claim",
            details: `Donald Trump has sued E Jean Carroll for defamation, alleging she falsely accused him of rape after a jury in a civil trial found that he ...`,
            articaleImg: "https://media.cnn.com/api/v1/images/stellar/prod/230621202747-11-donald-trump-neutral.jpg?c=16x9&q=h_720,w_1280,c_fill"
        },
        {
            id: 3,
            writerImg:'https://www.spectator.co.uk/wp-content/uploads/2021/01/Charles-Yu-%C2%A9-Tina-Chiou._r1.jpg',
            writer: "Son Heung-min",
            date: "29 Dec 2021",
            title: "apple is raising iCloud proces in many markets - find out if you're affected",
            details: "Apple has quietly increased the prices of popular iCloud+ plans in many markets - including the UK. So, is your plan increasing?",
            articaleImg: "https://images.macrumors.com/t/GkFeuDOWh_ST4JJCTMVHyVjuZ2s=/1600x0/article-new/2021/06/iCloud-General-Feature.jpg"
        },
        {
            id: 3,
            writerImg:'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTtMphosDowiMOwlKp_1Ph5JzNGLvnnxMRbwLLYdkv_91Nupu28fZY_QmfxfMLg3hg9lcL0A8E_d3JPvLk',
            writer: "Rupert Murdoch",
            date: "29 Dec 2021",
            title: "logan roy's legacy",
            details: "What did logan roy leave behind him? can one of his kids fill his shoes? like kendall said these are big big shoes and the sibs don't seem to habe big feet",
            articaleImg: "https://www.hollywoodreporter.com/wp-content/uploads/2023/05/brian-cox-H-2023.jpg?w=1296"
        },
    ]

    const [filteredList, setFilteredList] = new useState(data);

    const Theme = useTheme();

    const FilterSearch = (e) => {
        const query = e.target.value;
        console.log(query)
        let updatedList = [...data]
        updatedList = updatedList.filter((item) => {
            return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        if(updatedList.length !== 0)
        {
            setFilteredList(updatedList);
        }
    }


    return(
        <div className={[Theme ? HomeCSS.dark : HomeCSS.light, HomeCSS.Home, 'p-4'].join(' ')}>

            <div className={HomeCSS.LS}> 
                <div>
                    <input type='text' placeholder='Search' className={[HomeCSS.SI, 'p-2'].join(' ')} onChange={FilterSearch}/>
                </div>
                <div>
                    <h2 className='mt-2 p-2'>Articles</h2>
                    <div>
                        {filteredList.map((item, index) => (
                            <HomeCard key={index} writerImg={item.writerImg} writer={item.writer} date={item.date} title={item.title} details={item.details} articaleImg={item.articaleImg}/>
                        ))}
                    </div>
                </div>
            </div>

            <div className={HomeCSS.RS}>
                <h5>
                    People you might be interested 
                </h5>

                <div className={[HomeCSS.Suggest, 'mt-4'].join(' ')}>
                    <div>
                        <img src='https://m.media-amazon.com/images/M/MV5BNTRiMWRlZDItYmUzOS00YmVhLTkwY2EtMjQwMDllOTEzNWE2XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg' alt=''/>
                        Thomas Friedman
                    </div>
                    <button className='p-2'>Follow</button>
                </div>

                <div className={[HomeCSS.Suggest, 'mt-4'].join(' ')}>
                    <div>
                        <img src='https://egs.edu/wp-content/uploads/2019/06/slavoj_zizek_saas-fee.jpg' alt=''/>
                        Slavoj Žižek
                    </div>
                    <button className='p-2'>Follow</button>
                </div>

            </div>

        </div>
    )
}

export default Home;

