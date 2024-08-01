import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/shared/container";



interface Props{
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return(
        <header className={cn('border border-b', className)}>
            
            <Container className="flex items-center justify-between py-8">
                Header
            </Container>
        
        </header>
    );
}