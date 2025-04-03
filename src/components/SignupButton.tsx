'use client';

import ButtonLink, { ButtonLinkProps } from '@/components/ui/ButtonLink';

type SignupButtonProps = Omit<ButtonLinkProps, 'href' | 'children' | 'external'>;

export default function SignupButton(props: SignupButtonProps) {
  return (
    <ButtonLink
      href="https://app.easytakt.com"
      external
      {...props}
    >
      Try now for free
    </ButtonLink>
  );
} 