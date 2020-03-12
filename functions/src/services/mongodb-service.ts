import { Document } from 'mongoose';
import { IShrunkenLink } from '../models/IShrunkenLink';
import { ShrunkenLink } from '../models/ShrunkenLink';

export const newLink = (link: string): Promise<Document> => {
    return new Promise((resolve, reject) => {
        const shrunkenLink = new ShrunkenLink({ originalLink: link });
        shrunkenLink.save()
            .then((data) => resolve(data))
            .catch(err => {
                console.error(err);
                reject(err);
            })
    })
}

export const getLink = (shortLink: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        ShrunkenLink.findOne({ shortLink: shortLink.trim() })
            .then((link: IShrunkenLink | null) => {
                if (link) {
                    link.clicks!++;
                    link.save()
                        .then(() => resolve(link.originalLink))
                        .catch((err: any) => {
                            console.error(err);
                            reject(err);
                        })

                }
                else
                    reject('Link does not exist');
            })
            .catch((err: any) => {
                console.error(err);
                reject(err);
            })
    });
}