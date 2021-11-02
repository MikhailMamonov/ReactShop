using FluentValidation;

namespace ReactShop.Application.Features.Orders.CreateOrder
{
    public class CreateOrderCommandValidator : AbstractValidator<CreateOrderCommand>
    {
        public CreateOrderCommandValidator()
        {
            RuleFor(c => c.UserId).NotEmpty().WithMessage("Please specify a UserId"); 
            RuleFor(c => c.OrderTotal).NotEmpty().WithMessage("Please specify a OrderTotal"); 
            RuleFor(c => c.Address).NotEmpty().WithMessage("Please specify address"); 
            RuleFor(c => c.Country).NotEmpty().WithMessage("Please specify a country"); 
        }
    }
}