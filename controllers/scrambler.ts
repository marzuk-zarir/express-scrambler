import { Request, Response } from 'express'
import { generateRandomKey, decodeData, encodeData } from '../services/scrambler'

export function getScramblerView(req: Request, res: Response) {
    const key = req.query.key || generateRandomKey()

    res.render('index', {
        mode: req.query.mode || 'encode',
        key,
        data: '',
        result: '',
        isError: false
    })
}

export function postScramblerData(req: Request, res: Response) {
    const { key, data } = req.body
    const mode = req.query.mode || 'encode'

    if (!data || data.trim() === '') {
        return res.render('index', {
            mode,
            key: key,
            data: '',
            result: '',
            isError: true
        })
    }

    const result =
        mode === 'encode' || mode === 'generate_key' ? encodeData(key, data) : decodeData(key, data)

    res.render('index', {
        mode,
        key,
        data,
        result,
        isError: false
    })
}
