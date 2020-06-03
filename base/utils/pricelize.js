import React from 'react'

const pricelize = n => {
    if (typeof n === 'string') {
        const string = n.match(/^[0-9\s\-]+$/)
        const stringToNumber =
            string && string[0].match(/[-+]?[0-9]*\.?[0-9]+/g)

        if (stringToNumber) {
            const final = []
            stringToNumber.map(number => {
                return final.push(
                    number.replace(/./g, function(c, i, a) {
                        return i > 0 && c !== '.' && (a.length - i) % 3 === 0
                            ? '\u2009' + c
                            : c
                    })
                )
            })
            return (
                <span>
                    <span>
                        {final.length > 1
                            ? final.map((number, i) => {
                                  return i === 0 ? number + ' - ' : number
                              })
                            : final}
                    </span>
                </span>
            )
        } else {
            return n
        }
    }

    if (typeof n === 'number') {
        return (
            <span>
                <span>
                    {n &&
                        n.toFixed(0).replace(/./g, function(c, i, a) {
                            return i > 0 &&
                                c !== '.' &&
                                (a.length - i) % 3 === 0
                                ? '\u2009' + c
                                : c
                        })}
                </span>
            </span>
        )
    }
}

export default pricelize
