import React, { useState, useEffect } from 'react';

function App() {
    const [data, setDataa] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAppVisible, setIsAppVisible] = useState(true);
    const handleMenuClick = (menuItem) => {
        if (menuItem === 'Country List') {
            setIsAppVisible(false); // Hide App
        }
    };
    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch data with authentication token
                const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkU5MDE5MzlEMEMxNzM0MjAyOUEyNTYyQTk2RjUwMEM2NjdBN0E0RkFSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IjZRR1RuUXdYTkNBcG9sWXFsdlVBeG1lbnBQbyJ9.eyJuYmYiOjE3MjkxMzgwNzgsImV4cCI6MjAyOTEzODA3OCwiaXNzIjoiaHR0cHM6Ly9sb2dpbi1zaG9yZS1kZXZlbG9wLnN5bmVyZ3ltYXJpbmV0ZXN0LmNvbSIsImF1ZCI6WyJJZGVudGl0eVNlcnZlckFwaSIsIndhdmVhcGkiXSwiY2xpZW50X2lkIjoiZmVlZGJhY2tfYXBwIiwic3ViIjoiOTVmMjRmNWMtYTQyOC00ZWJiLWJjMGYtODBkODNiYzQxOThkIiwiYXV0aF90aW1lIjoxNzI5MTM4MDc3LCJpZHAiOiJsb2NhbCIsInJvbGUiOlsiQWRtaW5pc3RyYXRvciIsIlN5bmVyZ3lJZGVudGl0eUFkbWluQWRtaW5pc3RyYXRvciIsIlNvdXJjaW5nIFRlYW0iLCJEb2N1bWVudGF0aW9uIEV4ZWN1dGl2ZSIsIkRpcmVjdG9yIiwiU291cmNpbmcgTWFuYWdlciIsIkZsYWcgTGljZW5zZSBFeGVjdXRpdmUiLCJNYW5hZ2luZyBEaXJlY3RvciIsIkFjY291bnRzIEV4ZWN1dGl2ZSIsIkNTQWRtaW4iLCJUZWNobmljYWwgU3VwZXJpbnRlbmRlbnRzIiwiTWFyaW5lIFN1cGVyaW50ZW5kZW50cyIsIk9wZW4gUmVwb3J0aW5nLVdvcmtpbmcgQ29tbWl0dGVlIiwiT3BlbiBSZXBvcnRpbmctRXhlY3V0aXZlIENvbW1pdHRlZSIsIlZlc3NlbEFkbWluIiwiRmVlZGJhY2sgV2VsZmFyZSBDb21taXR0ZWUiLCJWZXNzZWxTdXBlckFkbWluaXN0cmF0b3IiLCJHcm91cCBIZWFkIiwiQ3JldyBDb29yZGluYXRvciIsIlNvdXJjaW5nIEV4ZWN1dGl2ZSIsIkZsZWV0IE1hbmFnZXIiLCJRSFNFIFRlYW0iLCJRSFNFIEhlYWQiLCJEb2N1bWVudGF0aW9uIE1hbmFnZXIiLCJQb3J0YWdlIEJpbGwgVGVhbSIsIkludGVydmlld2VyIiwiU2FqYW4gUm9sZSIsIk1hcmluZV9TdXBlcmludGVuZGVudCIsIlRlY2huaWNhbF9TdXBlcmludGVuZGVudCIsIlRlY2huaWNhbF9NYW5hZ2VyIiwiTWFyaW5lX01hbmFnZXIiLCJQT19Db29yZGluYXRvciIsIlBPX0FkbWluIiwiTWFyaW5lIE1hbmFnZXIiLCJUZWNobmljYWwgTWFuYWdlciIsIkltcGVyc29uYXRlX01hc3RlciIsIlZlc3NlbCBBdXRoZW50aWNhdGlvbiBQcm92aWRlciIsIlRlc3Qgc3VuZGFyIiwiYXBwcmFpc2FsIHJvbGUgIiwiVmVzc2VsTWFzdGVyQWRtaW4iLCJUcmFpbmluZyBDb29yZGluYXRvciIsIkNvbXBldGVuY3lUZXN0VXNlciIsIkNvbXBldGVuY3lUZXN0VXNlcjIiLCJjc19hZG1pbiIsIlZQIE1hc3RlciBBZG1pbiIsIlZQIFRlY2ggT3BzIEFkbWluIiwiRmVlZGJhY2sgQWRtaW4gVXNlciIsIkRvY3VtZW50IEV4ZWN1dGl2ZSIsIlZTQ19Sb2xlIiwiRmVlZGJhY2sgV2VsZmFyZSBDb21taXR0ZWUgTWVtYmVyIiwiRGlnaXRhbCBEZWJyaWVmIiwiUHJlLXNlYSBDYWRldCBBZG1pbiIsIkRHUyBVc2VyIiwiRmxlZXQgQ3JlYXRvciIsIlZQIERPQyBVc2VyIiwiVlAgQ3Jld2luZyBBZG1pbiIsIkRPQy1UZWNoT3BzIEZETCBDcmVhdG9yIiwiRE9DLU1hcmluZS9PcHMgRkRMIENyZWF0b3IiLCJWUCBBY2NvdW50cyBQSUMgQ3JlYXRvciIsIlZQIElUIFBJQyBDcmVhdG9yIiwiVlAgQ3Jld2luZyBGREwgQWRtaW4iLCJWUCBJbnN1cmFuY2UgRkRMIENyZWF0b3IiLCJWUCBFTVMgRkRMIENyZWF0b3IiLCJWUCBDTVMgRkRMIENyZWF0b3IiLCJEZWJyaWVmT25lIiwiUUhTRSBDcmV3aW5nIGFuZCBUcmFpbmluZyBDb29yZGluYXRvciJdLCJ1c2VyX2lkIjoiOTVmMjRmNWMtYTQyOC00ZWJiLWJjMGYtODBkODNiYzQxOThkIiwidXNlcm5hbWUiOiJha2hpbC5rcmlzaG5hbkB0aGlua3BhbG0uY29tIiwiZmlyc3RfbmFtZSI6IkFraGlsIiwibGFzdF9uYW1lIjoiS3Jpc2huYW5uIiwiaXNfYWN0aXZlIjoiMCIsImVtYWlsIjoiYWtoaWwua3Jpc2huYW5AdGhpbmtwYWxtLmNvbSIsIm1vYmlsZW51bWJlciI6Ijk5ODYyMzUzMzMiLCJlbWFpbF92ZXJpZmllZCI6IlRydWUiLCJhbGxvY2F0ZWRjb21wYW55IjoiU01SU1BMIiwidGVuYW50IjoiU3luZXJneSIsInZlc3NlbCI6InRlc3QiLCJyYW5rIjoiLS0tIFBsZWFzZSBzZWxlY3QgLS0tIiwicmFua19pZCI6IjAiLCJkZXNpZ25hdGlvbl9pZCI6IjAiLCJkZXNpZ25hdGlvbiI6Ii0tLSBQbGVhc2Ugc2VsZWN0IC0tLSIsImRlcGFydG1lbnQiOiItLS0gUGxlYXNlIHNlbGVjdCAtLS0iLCJkZXBhcnRtZW50X2lkIjoiMCIsInNlcnZpY2V0eXBlIjoiUmVjcnVpdG1lbnQiLCJjb21wYW55IjoiU01SU1BMIiwiY29tcGFueV9pZCI6IjUzIiwidXNlcl90eXBlIjoiU0hPUkUgRU1QTE9ZRUUiLCJzaWQiOiJDMjA0RTMyM0I3M0RCNUE1RDIyMUYyMERFOEZGNjYwOCIsImlhdCI6MTcyOTEzODA3OCwic2NvcGUiOlsid2F2ZWFwaSIsImVtYWlsIiwicHJvZmlsZSIsIm9wZW5pZCIsIklkZW50aXR5U2VydmVyQXBpIl0sImFtciI6WyJwd2QiXX0.pwI8dB7x3WEQfvOc1YPHXRPJ7cz6jUOAWCCe6ClSaNSgkoTCUTarEOBJkFL2yaGWraSWI0nnAXv4w9VyUymNTn43blob0OasGXbh9z2A4vZPYpa0DUU7fFr-F74_pUj73f7KjhCMaARQD2fCuNvnqmOGywmh-Sc0VXMZj2PpNJqW2YShuAY4-p4rrz47ERNGFwUMSOpXy7SOz3Ix6XHiqlaMZeM1csDhPieOnTtEuGLGgBePnPRKfcENLK9NGUvnzTDYNePL18qf4AJXYF_YYbLBa8p8OzRjqEQa0qprXvx2K5nr8a8a8EdxpLKx4qQy7BmlZfM1bR-Ncv804RL2ezvTwjyU3Mwl3pQoJVQcYy5qNyQl63JrSeZf2Vdt7brPP6VxaK9ImA7TOPzfN6pRbWjRkOJOPi8tDAYrUKqBppcbQGucx-2BHfdym0Sc7SNTCXmJPEgu05Qar6z8tHQhaBaODyunf4PCGvZsdCXQeTR-SxZBFz5W2LRiDZe_OoBZt-A7KlXOOIahG2RZ2p9epEvpy2qcUmcGOLC1tEuoNIx3wdvqL6pMN6awbYmXte_tjAfRomIl3rlyCS3pAaaUXSb-VcphW3Vl54aM467u5Y-XTe5h3deYo9FRWL0-C0Bga4Y73wkw7bfRN92vjxJelkNFZfLj702nzsM8xzAKCMk';
                const response = await fetch('https://api-dev.synergymarinetest.com/masterlcp-api/v1/nationality', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                setDataa(jsonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                    <div>
                        <table  style={{ border: "1px solid black", width: "100%", borderCollapse: "collapse" }}>
                            <thead style={{ backgroundColor: "#f2f2f2" }}>
                                <tr>
                                    <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
                                    <th style={{ border: "1px solid black", padding: "8px" }}>Id</th>
                                    <th style={{ border: "1px solid black", padding: "8px" }}>ISO Code</th>
                                </tr>
                            </thead>
                    {data.map((surveyType, index) => (
                       
                            <tbody>
                                <tr>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>{surveyType.name}</td>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>{surveyType.id}</td>
                                    <td style={{ border: "1px solid black", padding: "8px" }}>{surveyType.isoCode}</td>
                                </tr>
                            </tbody>
                       

                    ))}
                        </table>
                </div>
            )}
        </div>
    );

}

export default App;
