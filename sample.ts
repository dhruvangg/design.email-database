import { db } from './lib/prisma.js';
import { createBrand } from './services/brand.js';
import { getEmailByQuery } from './services/email.js'

export * from './services/email.js'
export * from './services/brand.js'

async function main() {
    const email = await createBrand({
        name: 'test'
    })
    console.log(email);
}

main()
    .then(async () => {
        await db.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await db.$disconnect()
        process.exit(1)
    })


/*

import { db } from "./lib/prisma"
import { getEmailByQuery } from "./services/email"

async function main() {
    // const email = await db.emails.delete({
    //     where: {
    //         id: "cm79vyry70000eq1s6ryq86dp"
    //     }
    // })


    // const email = await db.emails.findMany({
    //     where: {
    //         subject: "10 Free AI Tools, & Make Money With GPTs Guide🦾"
    //     },
    //     select: {
    //         id: true,
    //         subject: true,
    //         body: true,
    //         createdAt: true,
    //         updatedAt: true
    //     }
    // })

    const email = await getEmailByQuery({
        subject: "10 Free AI Tools, & Make Money With GPTs Guide🦾"
    })

    // const email = await db.emails.create({
    //     data: {
    //         subject: "10 Free AI Tools, & Make Money With GPTs Guide🦾",
    //         sender: "Champ Decay <champdecay@gmail.com>",
    //         body: "test",
    //         html: "test",
    //         image: "test",
    //         messageId: "test",
    //         tags: "test"
    //     }
    // })

    console.log(email)
}

main()
    .then(async () => {
        await db.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await db.$disconnect()
        process.exit(1)
    })

    */
