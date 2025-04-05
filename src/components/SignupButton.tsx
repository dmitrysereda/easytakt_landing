'use client';

import ButtonLink, { ButtonLinkProps } from '@/components/ui/ButtonLink';

type SignupButtonProps = Omit<ButtonLinkProps, 'href' | 'children' | 'external'> & {
  text?: string;
};

export default function SignupButton({ text = 'Try now for free', ...props }: SignupButtonProps) {
  return (
    <ButtonLink
      href="https://app.easytakt.com"
      external
      {...props}
    >
      {text}
    </ButtonLink>
  );
} 