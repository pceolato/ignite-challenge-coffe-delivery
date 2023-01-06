import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Avatar, Description, FeatureContent } from "./styles";

interface FeatuteProps {
    avatarColor: 'yellow-dark' | 'purple' | 'yellow' | 'base-text';
    content: string;

}

export function Feature({ avatarColor, content }: FeatuteProps) {
    return (
        <FeatureContent>
            <Avatar avatarColor={avatarColor}>
                {avatarColor === 'yellow-dark' && (
                    <ShoppingCart size={16} color="#FAFAFA" weight="fill" />
                )}
                {avatarColor === 'purple' && (
                    <Coffee size={16} color="#FAFAFA" weight="fill" />
                )} 
                {avatarColor === 'yellow' && (
                    <Timer size={16} color="#FAFAFA" weight="fill" />
                )} 
                {avatarColor === 'base-text' && (
                    <Package size={16} color="#FAFAFA" weight="fill" />
                )}
            </Avatar>           
            <Description>{content}</Description>
        </FeatureContent>
    )
}