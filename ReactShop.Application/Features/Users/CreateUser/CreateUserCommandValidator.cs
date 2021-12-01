using FluentValidation;

namespace ReactShop.Application.Features.Users.CreateUser
{
    public class CreateUserCommandValidator : AbstractValidator<CreateUserCommand>
    {
        public CreateUserCommandValidator()
        {
            RuleFor(c => c.UserName).NotEmpty().WithMessage("Please specify UserName");
            RuleFor(c => c.Email).NotEmpty().WithMessage("Please specify Email");
            RuleFor(c => c.Password).NotEmpty().WithMessage("Please specify Password");
        }
    }
}