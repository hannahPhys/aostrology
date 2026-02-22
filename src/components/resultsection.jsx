export function ResultDisplay({ result}) {
    if (!result) return null

    return (
        <div className="result-section">
            {result && (
                <div className="mt-6 p-4">
                    <div>
                        <p className="flex items-center">
                            You were born in the month <b>{result.maoriMonth.commonName}</b>
                        </p>
                        {result.maoriMonth && (
                            <p>{result.maoriMonth.description}</p>
                        )}
                        {result.markers && result.markers.length > 0 && (
                            <>
                                {result.markers.map((marker, index) => (
                                    <p key={index}>{marker.indicator}</p>
                                ))}
                            </>
                        )}
                        You were born under the <b>{result.maramataka.name}</b> moon{" "}
                        <p>{result.maramataka.meaning}</p>

                        {result.timeUnknown && (
                            <p className="mt-2 text-sm italic text-yellow-300">
                                Time unknown - moon phase and Maramataka are approximate.
                            </p>
                        )}
                    </div>
                    <img src={result.moonImage}
                        alt={`Moon ${result.moonImage}`}
                        style={{ height: '160px', verticalAlign: 'middle', marginLeft: '8px' }} />
                </div>
            )}
        </div>

    )
}   