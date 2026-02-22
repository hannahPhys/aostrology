import { Link } from 'react-router-dom';
import './About.css';
import './App.css';

function About() {
    return (
        <div className="about-container">
            <Link to="/" className="back-button">← back to calculator</Link>
            <div className="header-with-moon">
                <h1>about te ao-strology</h1>
                <img
                    src={`${import.meta.env.BASE_URL}moongifgreen.gif`}
                    alt="Moon animation"
                    className="moon-gif"
                />
            </div>
            <section className="about-section">
                <h2>what is maramataka?</h2>
                <p>
                    the maramataka is the traditional māori lunar, solar and environmental calendar,
                    a system
                    used by our tūpuna (ancestors) to understand the natural world and guide daily life.
                    in western astrology we see where the stars and moon were at the time of our birth, but
                    in te ao maori we see what natural cycles we were born into. 
                    we may also be used to directly translating each month to a maori month but in truth each month 
                    would begin and at the new moon, whiro. The new year would start when the matariki constellation
                    would rise in the pre dawn sky during the moon phase tangaroa.
                </p>
                <p>
                    the words marama taka translates to moon almanac. this name was not one of the original
                    names for the calendar but came about in different ways to be recorded as such.
                    some of the original names: <br />
                    ngā pō o te marama - instead of days of the week : nights of the moon <br />
                    te ta tau o rongo - to count the phases of the moon <br />
                    rongo ma tāne - sun and moon - lunar solar calendar where rongo is the honorific name for the moon
                    and tāne is the honorific name for the sun
                    
                </p>
                <p>
                    each night of the moon has its own name, energy, and characteristics. some nights
                    are good for planting, others for fishing, and some are better suited for rest and
                    reflection. the maramataka connects te rangi (the sky), te whenua (the land), and
                    te moana (the ocean) in a holistic view of time and seasons. 
                </p>
            </section>

            <section className="about-section">
                <h2>the 30 nights of te marama</h2>
                <p>
                    the lunar month begins with <strong>whiro</strong>, the new moon - a time of darkness
                    and rest. as the moon waxes, energy builds through phases like <strong>tirea</strong>
                    (emerging light) and <strong>tamatea</strong> (unpredictable energy), reaching the
                    peak at <strong>rakaunui</strong>, the full moon - a time of celebration and gathering.
                </p>
                <p>
                    after the full moon, we move through the <strong>tangaroa</strong> period, traditionally
                    the most bountiful time for harvesting kai (food) from the moana and ngahere (forest).
                    the cycle ends with <strong>mutuwhenua</strong>, as the moon darkens and we prepare
                    for the new cycle to begin.
                </p>
            </section>

            <section className="about-section">
                <h2>seasonal markers (tohu)</h2>
                <p>
                    the maramataka doesn't exist in isolation - it works alongside tohu, environmental
                    signs that indicate the changing seasons. these include the flowering of native plants
                    like kōwhai and pōhutukawa, the return of migrating birds like pīpīwharauroa (shining
                    cuckoo), and the rising of star clusters like matariki.
                </p>
                <p>
                    different parts of aotearoa have different tohu relevant to their environment. coastal
                    regions watch for different signs than inland areas, and the north island experiences
                    seasonal changes differently from te waipounamu (the south island). this calculator
                    attempts to incorporate regional differences to give you markers specific to your whenua.
                    the names for the phases of the moon come mainly from dr rangi mātāmua's research on the
                    maramataka of te waipounamu, but the seasonal markers are drawn from a variety of iwi sources
                    to reflect the diversity of māori knowledge across the motu (country).
                </p>
            </section>

            <section className="about-section">
                <h2>the thirteen months</h2>
                <p>
                    the māori year traditionally has 12 or 13 lunar months, depending on astronomical
                    observations. an intercalary (extra) month called <strong>muhanui</strong> is added
                    approximately every three years to realign the lunar calendar with the solar year -
                    similar to how leap years work in the gregorian calendar.
                </p>
                <p>
                    the new year begins around june/july with the rising of matariki (the pleiades star
                    cluster) or puanga (rigel), depending on your iwi and location. this marks the
                    beginning of <strong>pipiri</strong>, a time to reflect on the past year and prepare
                    for the year ahead.
                </p>
            </section>

            <section className="about-section">
                <h2>how this calculator works</h2>
                <p>
                    this tool uses astronomical calculations to determine the precise phase of the moon
                    at the time and place of your birth. it then maps this to the traditional maramataka
                    system, identifying which of the 30 nights you were born under.
                </p>
                <p>
                    the calculation considers your location because the moon phase can differ slightly
                    between the east and west coasts of aotearoa. it also determines which māori month
                    you were born in by counting lunar cycles from matariki/puanga, and provides seasonal
                    markers relevant to your region.
                </p>
                <p>
                    while this calculator uses modern astronomy, it's built on the foundations of traditional
                    māori knowledge passed down through generations of expert astronomers and navigators.
                </p>
            </section>

            <section className="about-section">
                <h2>about the creator</h2>
                <p>
                    {/* Add your personal bio here */}
                    [your bio goes here - tell people about yourself, your connection to this kaupapa,
                    and what inspired you to create this tool]

                </p>

                <div className="links-section">
                    <h3>connect & explore</h3>
                    <ul>
                        <li><a href="https://your-website.com" target="_blank" rel="noopener noreferrer">personal website</a></li>
                        <li><a href="https://github.com/hannahPhys/" target="_blank" rel="noopener noreferrer">github</a></li>
                        <li><a href="https://www.instagram.com/hannahaffogato" target="_blank" rel="noopener noreferrer">instagram</a></li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
            </section>

            <section className="about-section">
                <h2>resources & acknowledgments</h2>
                <p>
                    this project draws on the work of māori astronomers, particularly the research and
                    teachings of professor rangi mātāmua, and resources from te papa tongarewa and
                    various iwi authorities on maramataka practice.
                </p>
                <p>
                    if you'd like to learn more about the maramataka, these resources are invaluable:
                </p>
                <ul>
                    <li>matariki: the star of the year by rangi mātāmua</li>
                    <li>te papa's maramataka resources</li>
                    <li>your local iwi's maramataka and tohu</li>
                </ul>

            </section>

            <footer className="about-footer">
                <p>ngā mihi nui ki ngā tūpuna me ngā tohunga kōkōrangi</p>
                <p className="small-text">deep gratitude to our ancestors and astronomical experts</p>
            </footer>
        </div>
    );
}

export default About;
