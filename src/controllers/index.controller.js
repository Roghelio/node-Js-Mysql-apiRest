export const test = async (req, res) => {
    console.log('Ruta de prueba -> ping - pong');
    return res.json({
        msg: 'pong'
    });
}