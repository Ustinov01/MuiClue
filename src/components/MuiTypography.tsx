import { Typography } from "@mui/material"

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">h1 heading</Typography>
            <Typography variant="h2">h2 heading</Typography>
            <Typography variant="h3">h3 heading</Typography>
            <Typography variant="h4" component='h1' gutterBottom>h4 heading</Typography>
            <Typography variant="h5">h5 heading</Typography>
            <Typography variant="h6">h6 heading</Typography>

            <Typography variant="subtitle1">sub title1</Typography>
            <Typography variant="subtitle2">sub title2</Typography>

            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure illum a ipsam adipisci, consequuntur rem odit beatae, quo ex cupiditate corrupti maiores! Eligendi non ut suscipit. Harum, voluptatem iure.</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus pariatur, ullam maxime consectetur omnis, provident laudantium commodi quaerat reiciendis itaque eligendi quis exercitationem magnam. Voluptatem consectetur nam laudantium inventore.</Typography>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non voluptas et architecto, dolores, laudantium veritatis id modi consequatur consequuntur tempora aspernatur hic ad molestias autem! Dolorem totam adipisci quam.</div>
        </div >
    )
}