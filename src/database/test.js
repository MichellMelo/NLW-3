const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-3.7796419",
        lng: "-38.5505548",
        name: "Lar Batista",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "85987554412",
        images: [
            "https://images.unsplash.com/photo-1602973756506-2bd229de08bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha ver como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages);

    // consultar somente 1 orphanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage);

    // deletar um dado na tabela
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "4"')
    //);
})