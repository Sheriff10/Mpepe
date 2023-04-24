import React from 'react'

export const Tokenomics = () => {
  return (
    <div className="tk" id='tokenomics'>
        <div className="container">
            <div className="tk-head text-center">
                <h1>Tokenomics</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                    <div className="tk-data text-light text-right">
                        <p>Total Supply:</p>
                        <p>420,690,000,000</p>
                    </div>
                    <div className="tk-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>s.no</th>
                                    <th>topic</th>
                                    <th>percentage (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>camelot liquidity launch</td>
                                    <td>20.73</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Marketing and early contributors</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Team</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Burned forever</td>
                                    <td>64.27%</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="tk-img">
                        <img src="tkbg.png" alt="MPEPE_Tokenomic" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
