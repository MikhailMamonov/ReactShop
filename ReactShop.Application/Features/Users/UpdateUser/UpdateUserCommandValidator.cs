using FluentValidation;

namespace ReactShop.Application.Features.Users.UpdateUser
{
    public class UpdateUserCommandValidator : AbstractValidator<UpdateUserCommand>
    {
        public UpdateUserCommandValidator()
        {
            RuleFor(c => c.UserName).NotEmpty().WithMessage("Please specify UserName");
            RuleFor(c => c.Email).NotEmpty().WithMessage("Please specify Email");
            RuleFor(c => c.Password).NotEmpty().WithMessage("Please specify Password");
        }
    }
}