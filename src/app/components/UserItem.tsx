import { Avatar, Stack, Typography } from "@mui/material";

function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

type UserItemProps = {
    avatar: string;
    name: string;
    surname: string;
}

export default function UserItem({ avatar, name, surname }: UserItemProps) {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
                src={avatar}
                alt={`${name} ${surname}`}
                sx={{
                    width: 32,
                    height: 32,
                    bgcolor: stringToColor(`${name} ${surname}`)
                }}
            >
                <Typography variant="overline" fontWeight={500}>
                    {name?.charAt(0)}{surname?.charAt(0)}
                </Typography>
            </Avatar>
            <Typography variant="body2" fontWeight={500}>
                {name} {surname}
            </Typography>
        </Stack>
    )
}