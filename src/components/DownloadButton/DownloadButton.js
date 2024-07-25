import { Button } from "@mui/material";

export function DownloadButton({text, onClick, type, variant, size, sx}) {
    return (
        <Button 
            variant={variant} 
            size={size}
            sx={sx}
            onClick={onClick}
            type={type}>
                {text}
        </Button>
    )
}