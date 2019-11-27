import * as React from 'react';

const footerLink = {
    // color: '#fff',
    
}

const tableItem = {
    paddingRight: 20,
}

/**
 * @author Hunter Watrin
 */
class Footer extends React.Component {
    render = () => (
        <div style = {{backgroundColor: '#404040', justifyContent: 'center', alignItems: 'center', marginTop: '15vh'}}>
            <div className = "container" style = {{maxHeight: 200}}>
            <h3 style = {{color: '#fff'}}>Helpful Links on the Effects of Sleep</h3>
            <table>
                <tr>
                    <td style = {tableItem}><a target="_blank" style = {footerLink} href = "https://www.ted.com/talks/matt_walker_sleep_is_your_superpower?language=en">Sleep is your superpower</a></td>
                    <td style = {tableItem}><a style = {footerLink} target="_blank" href = "https://www.webmd.com/g00/sleep-disorders/physical-side-effects-oversleeping?i10c.ua=1&i10c.encReferrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3d&i10c.dv=25">Don't sleep too much</a></td>

                </tr>
                <tr>
                    <td style = {tableItem}><a style = {footerLink} target="_blank" href = "https://jamesclear.com/sleep">Practical Guide to Get More Sleep</a></td>
                    <td style = {tableItem}><a style = {footerLink} target="_blank" href = "https://www.scmp.com/lifestyle/health-wellness/article/2156133/how-sleep-helps-athletes-lebron-james-and-roger-federer">How much do top athletes sleep?</a></td>
                </tr>
                <tr>
                    <td style = {tableItem}><a style = {footerLink} target="_blank" href = "https://www.huffpost.com/entry/man-dies-11-days-no-sleep-deprivation-jiang-xiaoshan_n_1631703">This guy stayed up for 11 days and died</a></td>
                    <td style = {tableItem}><a style = {footerLink} target="_blank" href = "https://www.ncbi.nlm.nih.gov/pubmed/12683469">Boring academic study about sleep loss</a></td>

                </tr>
                <tr>
                    <td style = {tableItem}><a style = {footerLink} target="_blank" href = "https://www.damninteresting.com/the-consequences-of-excessive-wakefulness/">Consequences of excessive wakefulness</a></td>
                </tr>
              
            </table>
            </div>
        </div>
    )
}

export default Footer;